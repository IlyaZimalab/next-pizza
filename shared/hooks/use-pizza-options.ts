import { useEffect, useState } from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { ProductItem } from '@prisma/client';
import { Variant } from '../components/shared/group-variants';
import { getAvailablePizzaSizes } from '../lib';

interface ReturnProps {
  size: PizzaSize;
  setSize: (type: PizzaSize) => void;
  type: PizzaType;
  setType: (type: PizzaType) => void;
  currentItemId?: number;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const availableSizes = getAvailablePizzaSizes(items, type);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id

  useEffect(() => {
    const isCurrentSizeAvailable = availableSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );

    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isCurrentSizeAvailable && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    setSize,
    type,
    setType,
    currentItemId,
    selectedIngredients,
    addIngredient,
    availableSizes,
  };
};
