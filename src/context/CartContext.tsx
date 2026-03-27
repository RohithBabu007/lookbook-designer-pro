import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  image: string;
  label: string;
  sku: string;
  price: number;
  category: string;
  matchingScore?: number;
  isHero?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItems: (items: CartItem[]) => void;
  removeItem: (sku: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItems = (newItems: CartItem[]) => {
    setItems((prev) => {
      const existing = new Set(prev.map((i) => i.sku));
      const unique = newItems.filter((i) => !existing.has(i.sku));
      return [...prev, ...unique];
    });
    setIsOpen(true);
  };

  const removeItem = (sku: string) =>
    setItems((prev) => prev.filter((i) => i.sku !== sku));

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItems, removeItem, clearCart, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};
