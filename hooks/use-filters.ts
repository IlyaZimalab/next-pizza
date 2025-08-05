import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  sizes: string;
  pizzaTypes: string;
  selectedIngredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnType extends Filters {
  setSelectedIngredients: (value: string) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setPriceFrom: (value: number) => void;
  setPriceTo: (value: number) => void;
  setBothPrices: (value: number[]) => void;
}

export const useFilters = (): ReturnType => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes')
        ? searchParams.get('pizzaTypes')?.split(',')
        : []
    )
  );
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('selectedIngredients')?.split(','))
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const setPriceFrom = (value: number) =>
    setPrices((prev) => ({ ...prev, priceFrom: value }));

  const setPriceTo = (value: number) =>
    setPrices((prev) => ({ ...prev, priceTo: value }));

  const setBothPrices = (value: number[]) =>
    setPrices(() => ({ priceFrom: value[0], priceTo: value[1] }));

  return {
    selectedIngredients,
    setSelectedIngredients: toggleIngredients,
    pizzaTypes,
    setPizzaTypes: togglePizzaTypes,
    sizes,
    setSizes: toggleSizes,
    prices,
    setPriceFrom,
    setPriceTo,
    setBothPrices,
  };
};
