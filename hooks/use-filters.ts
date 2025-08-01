import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  sizes: string;
  pizzaTypes: string;
  selectedIngredients: string 
} 

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );
  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes')
        ? searchParams.get('pizzaTypes')?.split(',')
        : []
    )
  );
  const [selectedIngredients, { toggle: toggleIngredientsId }] = useSet(
    new Set<string>(
      searchParams.has('selectedIngredients')
        ? searchParams.get('selectedIngredients')?.split(',')
        : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  useEffect(() => {
      const filters = {
        ...prices,
        pizzaTypes: Array.from(pizzaTypes),
        sizes: Array.from(sizes),
        selectedIngredients: Array.from(selectedIngredients),
      }
      const query = (qs.stringify(filters, {
        arrayFormat: 'comma',
      }))
  
      router.push(`?${query}`, {
        scroll: false,
      })
      
    }, [prices, selectedIngredients, sizes, pizzaTypes, router])

  return {
    toggleIngredientsId,
    selectedIngredients,
    togglePizzaType,
    pizzaTypes,
    toggleSize,
    sizes,
    setPrices,
    prices
  }
};
