import { mapPizzaSize, mapPizzaType, PizzaSize, PizzaType } from './../constants/pizza';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: CartStateItem['ingredients']
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    const sizeName = mapPizzaSize[pizzaSize];
    details.push(`${sizeName} ${pizzaSize} см, ${typeName} тесто`);
  }
  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
