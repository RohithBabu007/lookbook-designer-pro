import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  image: string;
  label: string;
  sku: string;
  price: number;
  category: string;
  matchingScore?: number;
  isHero?: boolean;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItems: (items: Omit<CartItem, "quantity">[]) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
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

  const addItems = (newItems: Omit<CartItem, "quantity">[]) => {
    setItems((prev) => {
      const updated = [...prev];
      for (const item of newItems) {
        const existing = updated.find((i) => i.sku === item.sku);
        if (existing) {
          existing.quantity += 1;
        } else {
          updated.push({ ...item, quantity: 1 });
        }
      }
      return updated;
    });
    setIsOpen(true);
  };

  const removeItem = (sku: string) =>
    setItems((prev) => prev.filter((i) => i.sku !== sku));

  const updateQuantity = (sku: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(sku);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.sku === sku ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItems, removeItem, updateQuantity, clearCart, isOpen, setIsOpen, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
