'use client';

import React from 'react';
import { Dialog } from '../../ui';
import { Title } from '../title';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Ingredient, Product, ProductItem } from '@prisma/client';
import { ProductImage } from '../product-image';
import { GroupVariants } from '../group-variants';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { ChooseProductForm } from '../choose-product-form';

interface Props {
  product: Product ;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn("p-0 sm:max-w-[1060px] w-[1060px] sm:max-h-[600px] h-[500px] bg-white overflow-hidden", className)}>
        {
          product.isPizza ? 
          <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name}/> : 
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>
        }
      </DialogContent>
    </Dialog>
  );
};
