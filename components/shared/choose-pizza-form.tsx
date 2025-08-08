import React from 'react';
import { GroupVariants, ProductImage } from '.';
import { DialogTitle } from '../ui/dialog';
import { Button } from '../ui';

type Variants = {
  name: string;
  value: '1' | '2' | '3';
  disabled: boolean;
};

interface Props {
  imageUrl: string;
  name: string;
  ingredients?: any[];
  items?: Variants[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  items,
  name,
  ingredients,
  onClickAdd,
  className,
}: Props) => {
  const totalPrice = 350;
  const textDetails = '30 см, традиционное тесто 30';
  return (
    <div className="flex flex-1">
      <ProductImage imageUrl={imageUrl} size={30} type='pizza'/>
      <div className="w-[450px] bg-gray-50 p-7">
        <DialogTitle title={name} className="font-extrabold text-[26px] md-1">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          items={[
            { name: 'Маленькая', value: '1', disabled: false },
            { name: 'Средняя', value: '2', disabled: false },
            { name: 'Большая', value: '3', disabled: true },
          ]}
          selectedValue="2"
        />
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-[70%]">
          Добавить в корзину {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
