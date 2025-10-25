// src/context/cart.ts
import { createContext } from "react";

export type Item = { name: string; price: number; img: string; qty: number };
export type Addable = { name: string; price: number; img: string };

export type CartCtx = {
  items: Item[];
  addItem: (p: Addable) => void;
  inc: (name: string) => void;
  dec: (name: string) => void;
  remove: (name: string) => void;
  clear: () => void;
  total: number;
};

export const LS_KEY = "pl:cart";
export const CartContext = createContext<CartCtx | null>(null);
