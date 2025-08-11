import { ProductItem } from "@prisma/client";
import { pizzaSizes } from "../constants/pizza";

import type { PizzaType } from '@/shared/constants/pizza';
import { Variant } from "../components/shared/group-variants";

/**
 * Функция для возврата доступных размеров пиццы
 * 
 * @param items items - список вариаций товара
 * @param type type - тип выбранного теста
 * 
 * @returns array - доступных размеров
 */


export const getAvailablePizzaSizes = (items: ProductItem[], type: PizzaType): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
