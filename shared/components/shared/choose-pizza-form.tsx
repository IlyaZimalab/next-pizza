"use client";

import { Ingredient, ProductItem } from "@prisma/client";

import { GroupVariants, IngredientItem, ProductImage, Title } from ".";
import { DialogTitle } from "../ui/dialog";
import { Button } from "../ui";
import {
  mapPizzaType,
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { calcTotalPizzaPrice } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
  imageUrl: string;
  name: string;
  ingredients?: Ingredient[];
  items: ProductItem[];
  onSubmit: (productItemId: number, ingredents: number[]) => void;
  loading?: boolean;
  className?: string;
  forModal?: boolean;
}

export const ChoosePizzaForm = ({
  imageUrl,
  items,
  name,
  ingredients,
  onSubmit,
  loading,
  forModal,
  className,
}: Props) => {
  const {
    type,
    size,
    setType,
    setSize,
    currentItemId,
    selectedIngredients,
    availableSizes,
    addIngredient,
  } = usePizzaOptions(items);

  const totalPrice = calcTotalPizzaPrice(
    items,
    type,
    size,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className="flex flex-1">
      <ProductImage imageUrl={imageUrl} type="pizza" size={size} />
      <div className="w-[490px] bg-gray-50 p-7">
        {forModal ? (
          <DialogTitle title={name} className="font-extrabold text-[26px] mb-1">
            {name}
          </DialogTitle>
        ) : (
          <Title text={name} className="font-extrabold text-[26px] md-1" />
        )}
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-1">
          <GroupVariants
            items={availableSizes}
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
          loading={loading}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
