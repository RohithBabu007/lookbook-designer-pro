import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const shipping = subtotal > 200 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setPlaced(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (placed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-4 animate-fade-up">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
          <h1 className="font-display text-2xl font-medium tracking-tight">Order Confirmed!</h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Thank you for your purchase. You'll receive a confirmation email at <strong>{form.email}</strong> shortly.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-4">
          <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-3 py-2.5 rounded-md text-sm bg-background ring-1 ring-border focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/60";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-1.5 rounded-md hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display text-xl font-medium tracking-tight">Checkout</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Shipping Form — Left */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact */}
            <section className="space-y-3">
              <h2 className="font-display text-base font-medium tracking-tight">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="First Name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} />
                <input required placeholder="Last Name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} />
              </div>
              <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
              <input placeholder="Phone (optional)" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </section>

            {/* Shipping Address */}
            <section className="space-y-3">
              <h2 className="font-display text-base font-medium tracking-tight">Shipping Address</h2>
              <input required placeholder="Street Address" value={form.address} onChange={(e) => update("address", e.target.value)} className={inputClass} />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <input required placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} className={inputClass} />
                <input required placeholder="State" value={form.state} onChange={(e) => update("state", e.target.value)} className={inputClass} />
                <input required placeholder="ZIP Code" value={form.zip} onChange={(e) => update("zip", e.target.value)} className={inputClass} />
              </div>
              <select value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass}>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
              </select>
            </section>

            {/* Payment placeholder */}
            <section className="space-y-3">
              <h2 className="font-display text-base font-medium tracking-tight">Payment</h2>
              <div className="rounded-md ring-1 ring-border p-4 bg-muted/20 text-sm text-muted-foreground text-center">
                Payment integration coming soon — Cash on delivery available
              </div>
            </section>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors lg:hidden"
            >
              Place Order — ${total.toFixed(2)}
            </button>
          </div>

          {/* Order Summary — Right */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-4 rounded-lg ring-1 ring-border p-5 bg-muted/10">
              <h2 className="font-display text-base font-medium tracking-tight">Order Summary</h2>

              <div className="space-y-3 max-h-[40vh] overflow-y-auto scrollbar-thin">
                {items.map((item) => (
                  <div key={item.sku} className="flex gap-3">
                    <div className="relative shrink-0">
                      <img src={item.image} alt={item.label} className="w-14 h-14 rounded-md object-cover" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-foreground text-background text-[0.6rem] font-bold flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">{item.label}</p>
                      <p className="text-[0.6rem] text-muted-foreground font-mono">SKU: {item.sku}</p>
                      {item.isHero && (
                        <span className="text-[0.55rem] font-medium px-1 py-0.5 rounded bg-primary/10 text-primary">Hero</span>
                      )}
                    </div>
                    <p className="text-xs font-semibold shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-base border-t border-border pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {shipping === 0 && (
                <p className="text-[0.65rem] text-emerald-600 font-medium">✓ Free shipping on orders over $200</p>
              )}

              <button
                type="submit"
                className="hidden lg:block w-full py-3 rounded-md bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                Place Order — ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
