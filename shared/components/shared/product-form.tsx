"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import React from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
  onSubmit?: VoidFunction;
  forModal?: boolean;
  product: ProductWithRelations;
}

export const ProductForm = ({
  product,
  onSubmit: _onSubmit,
  forModal,
}: Props) => {
  const productId = product.items[0].id;
  const productPrice = product.items[0].price;
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const onSubmit = async (productItemId?: number, ingredents?: number[]) => {
    try {
      const itemId = productItemId ?? productId;
      await addCartItem({ productItemId: itemId, ingredents });
      toast.success(
        <div className="flex flex-col">
          <span>Добавленно в корзину:</span>
          <br />
          <span className="font-bold block">{product.name}</span>
        </div>
      );
      _onSubmit?.();
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
  };

  if (product.isPizza) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
        forModal={forModal}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      price={productPrice}
      onSubmit={onSubmit}
      loading={loading}
      forModal={forModal}
    />
  );
};
