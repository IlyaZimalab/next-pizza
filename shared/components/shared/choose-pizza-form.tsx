'use client';

import { useEffect, useState } from 'react';
import { useSet } from 'react-use';
import { Ingredient, ProductItem } from '@prisma/client';

import { GroupVariants, IngredientItem, ProductImage } from '.';
import { DialogTitle } from '../ui/dialog';
import { Button } from '../ui';
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/shared/constants/pizza';
import { calcTotalPizzaPrice, getAvailablePizzaSizes } from '@/shared/lib';

interface Props {
  imageUrl: string;
  name: string;
  ingredients?: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  items,
  name,
  ingredients,
  onClickAddCart,
  className,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const totalPrice = calcTotalPizzaPrice(items, type, size, ingredients, selectedIngredients)

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;


  const availablePizzaSizes = getAvailablePizzaSizes(items, type)

  
  useEffect(() => {
    const isCurrentSizeAvailable = availablePizzaSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    if (!isCurrentSizeAvailable && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  
  const handleClickAdd = () => {
    onClickAddCart?.()
  };

  return (
    <div className="flex flex-1">
      <ProductImage imageUrl={imageUrl} type="pizza" size={size} />
      <div className="w-[490px] bg-gray-50 p-7">
        <DialogTitle title={name} className="font-extrabold text-[26px] md-1">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-1">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients?.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                id={ingredient.id}
                price={ingredient.price}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
