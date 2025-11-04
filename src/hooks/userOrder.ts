import { toast } from "react-toastify";
// ERROR 1 CORREGIDO:
// Cambiamos { useCart } por useCart (import por defecto)
// Asumiendo que la ruta "@/context/CartContext" es correcta.
import { useCart } from '../hooks/useCart';

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