import { useEffect } from 'react';
import { CartStateItem } from '../lib/get-cart-details';
import { useCartStore } from '../store';
import { CreateCartItemValues } from '../services/dto/cart.dto';

interface ReturnProps {
  totalAmount: number;
  items: CartStateItem[];
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  loading: boolean;
  addCartItem: (values: CreateCartItemValues) => void
}

export const useCart = (): ReturnProps => {
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const loading = useCartStore((state) => state.loading);
  const addCartItem = useCartStore((state) => state.addCartItem);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    totalAmount,
    items,
    updateItemQuantity,
    removeCartItem,
    loading,
    addCartItem
  };
};
