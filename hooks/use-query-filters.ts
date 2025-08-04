import { useEffect } from 'react';
import type { Filters } from './use-filters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = ({ pizzaTypes, prices, selectedIngredients, sizes }: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      selectedIngredients: Array.from(selectedIngredients),
    };
    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [pizzaTypes, prices, selectedIngredients, sizes, router]);
};
