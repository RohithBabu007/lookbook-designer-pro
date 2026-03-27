import { useCart } from "@/context/CartContext";
import { X, Trash2, ShoppingBag } from "lucide-react";

const CartPanel = () => {
  const { items, removeItem, clearCart, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-background border-l border-border h-full flex flex-col animate-fade-up" style={{ animationDirection: "normal" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-display text-lg font-medium tracking-tight">Your Cart</h2>
            <span className="text-xs text-muted-foreground">({items.length} items)</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-md hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.sku} className="flex gap-3 p-3 rounded-lg ring-1 ring-border bg-muted/20">
                <img src={item.image} alt={item.label} className="w-16 h-16 rounded-md object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.isHero && (
                        <span className="text-[0.6rem] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                          Hero Product
                        </span>
                      )}
                    </div>
                    <button onClick={() => removeItem(item.sku)} className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[0.6rem] text-muted-foreground font-mono mt-0.5">SKU: {item.sku}</p>
                  <p className="text-[0.6rem] text-muted-foreground">{item.category}</p>
                  {item.matchingScore && (
                    <p className="text-[0.6rem] text-muted-foreground">Match: {item.matchingScore}%</p>
                  )}
                  <p className="text-sm font-semibold text-foreground mt-1">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
              Checkout
            </button>
            <button onClick={clearCart} className="w-full py-2 rounded-md text-xs text-muted-foreground hover:text-destructive transition-colors">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPanel;
