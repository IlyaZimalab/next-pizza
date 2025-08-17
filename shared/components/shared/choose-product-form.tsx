import React from "react";
import { ProductImage, Title } from ".";
import { DialogTitle } from "../ui/dialog";
import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  imageUrl: string;
  name: string;
  onSubmit?: VoidFunction;
  className?: string;
  price: number;
  loading?: boolean;
  forModal?: boolean;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  onSubmit,
  className,
  price,
  loading,
  forModal,
}: Props) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} type="product" />
      <div className="w-[450px] bg-gray-50 p-7">
        {forModal ? (
          <DialogTitle title={name} className="font-extrabold text-[26px] mb-1">
            {name}
          </DialogTitle>
        ) : (
          <Title text={name} className="font-extrabold text-[26px] md-1" />
        )}
        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-85"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
