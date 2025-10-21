// src/hooks/useCartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  count: number;
};

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "count">, count?: number) => void;
  removeItem: (id: string) => void;
  updateItemCount: (id: string, newCount: number) => void;
  clearCart: () => void;
  getItemCount: (id: string) => number;
  getTotalCount: () => number;
  getTotalPrice: () => number;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, count = 1) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          toast.info("Item already in cart");
          return;
        }
        set({ items: [...get().items, { ...item, count }] });
        toast.success("Item added to cart");
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
        toast.success("Item removed from cart");
      },

      updateItemCount: (id, newCount) => {
        if (newCount < 1) {
          toast.error("Quantity cannot be less than 1");
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, count: newCount } : i
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
        toast.success("Cart cleared");
      },

      getItemCount: (id) => {
        const item = get().items.find((i) => i.id === id);
        return item ? item.count : 0;
      },

      getTotalCount: () =>
        get().items.reduce((acc, i) => acc + i.count, 0),

      getTotalPrice: () =>
        get().items.reduce((acc, i) => acc + i.price * i.count, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
