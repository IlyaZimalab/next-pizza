import React from 'react';
import { GroupVariants, ProductImage } from '.';
import { DialogTitle } from '../ui/dialog';
import { Button } from '../ui';
import { cn } from '@/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  onClickAdd,
  className,
}: Props) => {
  const totalPrice = 350;
  const textDetails = '30 см, традиционное тесто 30';
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} type='product'/>
      <div className="w-[450px] bg-gray-50 p-7">
        <DialogTitle title={name} className="font-extrabold text-[26px] md-1">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-[70%]">
          Добавить в корзину {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
