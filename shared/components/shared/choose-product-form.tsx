import React from 'react';
import { ProductImage } from '.';
import { DialogTitle } from '../ui/dialog';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  onSubmit?: VoidFunction;
  className?: string;
  price: number;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  onSubmit,
  className,
  price,
}: Props) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage imageUrl={imageUrl} type="product" />
      <div className="w-[450px] bg-gray-50 p-7">
        <DialogTitle title={name} className="font-extrabold text-[26px] mb-1">
          {name}
        </DialogTitle>
        <Button
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-85"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
