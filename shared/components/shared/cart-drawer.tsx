'use client';

import { PropsWithChildren } from 'react';
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

interface Props {
  className?: string;
}

export const CartDrawer = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="overflow-auto scrollbar flex-1">
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              details={getCartItemDetails(1, 20, [
                { name: 'Сыр' },
                { name: 'Сладкий перец' },
              ])}
              name={'Чоризо Фреш'}
              price={419}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className="mx-0 bg-white p-8">
          <div>
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итог
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2 " />
              </span>

              <span className="font-bold text-lg">500 ₽</span>
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
