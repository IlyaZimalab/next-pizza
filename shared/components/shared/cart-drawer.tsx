'use client';

import { PropsWithChildren, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import Link from 'next/link';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/shared/lib';
import { useCartStore } from '@/shared/store';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

interface Props {
  className?: string;
}

export const CartDrawer = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    fetchCartItems()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="overflow-auto scrollbar flex-1">
          {items.map((item) => (
            <div key={item.id} className="mb-2">
              <CartDrawerItem
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, item.ingredients)}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="mx-0 bg-white p-8">
          <div>
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итог
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2 " />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
