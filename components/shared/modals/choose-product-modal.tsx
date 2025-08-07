'use client';

import React from 'react';
import { Dialog } from '../../ui';
import { Title } from '../title';
import { DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Product } from '@prisma/client';
import { ProductImage } from '../product-image';
import { GroupVariants } from '../group-variants';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn("p-0 w-[1060px] max-h-[500px] bg-white overflow-hidden")}>
        <div className="flex flex-1">
          <ProductImage imageUrl={product.imageUrl} size={40} />
          <div className="w-[450px] bg-gray-50 p-7">
            <Title
              text={product.name}
              size="md"
              className="font-extrabold md-1"
            />
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, laborum similique ullam velit soluta, eum voluptatibus
              voluptatem aliquid in maxime adipisci amet.
            </p>
            <GroupVariants
              items={[
                { name: 'Маленькая', value: '1', disabled: false },
                { name: 'Средняя', value: '2', disabled: false },
                { name: 'Большая', value: '3', disabled: true },
              ]}
              selectedValue="2"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
