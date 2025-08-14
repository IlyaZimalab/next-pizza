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

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const productId = product.items[0].id;
  const productPrice = product.items[0].price;
  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productItemId: productId,
    });
  };

  const onAddPizza = (productItemId: number, ingredents: number[]) => {
    addCartItem({ productItemId, ingredents });
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
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={productPrice}
            onSubmit={onAddProduct}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
