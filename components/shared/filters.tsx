'use client';

import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { RangeSlider } from './range-slider';
import { Title } from './title';
import { useFilterIngredients } from '@/hooks/use-ingredients';
import { useFilters } from '@/hooks/use-filters';
interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters = ({ className }: Props) => {
  const { ingredients } = useFilterIngredients();
  const {
    setPrices,
    toggleIngredientsId,
    togglePizzaType,
    sizes,
    toggleSize,
    prices,
    selectedIngredients,
    pizzaTypes,
  } = useFilters();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

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
            setPrices({ priceFrom, priceTo })
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
        name="ingredients"
      />
    </div>
  );
};
