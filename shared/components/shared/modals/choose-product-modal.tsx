'use client';

import React from 'react';
import { Dialog } from '../../ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { ProductWithRelations } from '@/@types/prisma';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { ChooseProductForm } from '../choose-product-form';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const productId = product.items[0].id;
  const productPrice = product.items[0].price;
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const onSubmit = async (productItemId?: number, ingredents?: number[]) => {
    try {
      const itemId = productItemId ?? productId;
      await addCartItem({ productItemId: itemId, ingredents });
      toast.success(
        <div className='flex flex-col'>
          <span>Добавленно в корзину:</span>
          <br />
          <span className="font-bold block">{product.name}</span>
        </div>
      );
      router.back();
    } catch (error) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 sm:max-w-[1060px] w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        {product.isPizza ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={productPrice}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
