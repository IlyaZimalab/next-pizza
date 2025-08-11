import { ProductItem, Ingredient } from '@prisma/client';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param items items - список вариаций товара
 * @param type type - тип выбранного теста
 * @param size size - размер выбранной пиццы
 * @param ingredients ingredients - список ингредиента
 * @param selectedIngredients selectedIngredients - список выбранных ингредиентов
 *
 * @returns number общую стоимость
 */

export const calcTotalPizzaPrice = (
  items: ProductItem[] = [],
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[] = [],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items?.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    ?.filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
