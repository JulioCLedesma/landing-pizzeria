// src/context/CartContext.tsx
import { useEffect, useMemo, useState } from "react";
import { CartContext, LS_KEY, type Item, type Addable } from "./cart";

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (p: Addable) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.name === p.name);
      if (i >= 0) {
        const clone = [...prev];
        clone[i] = { ...clone[i], qty: clone[i].qty + 1 };
        return clone;
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const inc = (name: string) =>
    setItems(prev => prev.map(x => x.name === name ? { ...x, qty: x.qty + 1 } : x));

  const dec = (name: string) =>
    setItems(prev => prev.flatMap(x =>
      x.name === name ? (x.qty <= 1 ? [] : [{ ...x, qty: x.qty - 1 }]) : [x]
    ));

  const remove = (name: string) => setItems(prev => prev.filter(x => x.name !== name));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, x) => s + x.price * x.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, inc, dec, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}
