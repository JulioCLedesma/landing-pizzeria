// hooks/useOrder.ts
import { toast } from "react-toastify";
import { useCart } from "@/context/CartContext";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  type?: "menu" | "promo";
  // ...cualquier otro campo que ya usas en el carrito (qty, notes, etc.)
}

export function useOrder() {
  const { addItem } = useCart();

  function orderItem(item: OrderItem) {
    addItem(item); // ← MISMA función del contexto CartContext
    toast.success(`Agregado: ${item.name}`);
  }

  return { orderItem };
}
