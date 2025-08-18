'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Button, Input } from '@/shared/components/ui';
import { Textarea } from '@/shared/components/ui';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks';
import { getCartItemDetails } from '@/shared/lib';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalAmount, removeCartItem, updateItemQuantity } = useCart();
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'minus' ? quantity - 1 : quantity + 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-bold text-[36px] mb-8" />
      <div className="flex gap-20">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize,
                    item.ingredients
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                  disabled={item.disabled}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="adress"
                className="text-base"
                placeholder="Введите адрес"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Укажите тут дополнительную информацию для курьера"
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-110">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итог:</span>
              <span className="text-[34px] font-extrabold">3500 ₽</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={20} className="mr-2 text-gray-300" />
                  Стоимость товаров:
                </div>
              }
              value={`${totalAmount}₽`}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={20} className="mr-2 text-gray-300" />
                  Налоги:
                </div>
              }
              value="200 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={20} className="mr-2 text-gray-300" />
                  Доставка:
                </div>
              }
              value="300 ₽"
            />
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
