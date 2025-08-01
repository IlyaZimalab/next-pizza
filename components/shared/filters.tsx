'use client';

import { useEffect, useState } from 'react';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { RangeSlider } from './range-slider';
import { Title } from './title';
import { useFilterIngredients } from '@/hooks/use-filter-Ingredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';
interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  sizes: string;
  pizzaTypes: string;
  selectedIngredients: string 
} 

export const Filters = ({ className }: Props) => {
  const { ingredients } = useFilterIngredients();
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [sizes, { toggle: toggleSize }] = useSet(new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []));
  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []));
  const [selectedIngredients, { toggle: toggleIngredientsId }] = useSet(new Set<string>(searchParams.has('selectedIngredients') ? searchParams.get('selectedIngredients')?.split(',') : []));

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.has('priceFrom')) || undefined,
    priceTo: Number(searchParams.has('priceTo')) || undefined
  });
  
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  
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

  return (
    <div className={className}>
      <Title text="Фильтрация" size="md" className="mb-5 font-bold"></Title>

      <CheckboxFiltersGroup
        title="Тип теста"
        className="mb-5"
        selected={pizzaTypes}
        onClickCheckbox={togglePizzaType}
        items={[
          { text: 'Традиционное', value: '1' },
          { text: 'Тонкое', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        className="mb-5"
        selected={sizes}
        onClickCheckbox={toggleSize}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={toggleIngredientsId}
        selected={selectedIngredients}
        name='ingredients'
      />
    </div>
  );
};
