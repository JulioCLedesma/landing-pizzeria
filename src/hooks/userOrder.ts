import { toast } from "react-toastify";
// ERROR 1 CORREGIDO:
// Cambiamos { useCart } por useCart (import por defecto)
// Asumiendo que la ruta "@/context/CartContext" es correcta.
import { useCart } from '../hooks/useCart';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  // ERROR 1 CORREGIDO (DE NUEVO):
  // Tu 'Addable' (del context) requiere 'img' como 'string' (obligatorio).
  // Quitamos el '?' para que 'img' ya no sea 'string | undefined'.
  img: string; 
  type?: "menu" | "promo";
  // ...cualquier otro campo que ya usas en el carrito (qty, notes, etc.)
}

export function useOrder() {
  const { addItem } = useCart();

  function orderItem(item: OrderItem) {
    // Esta línea (la 20) ahora es válida porque OrderItem
    // es compatible con el tipo 'Addable' que 'addItem' espera.
    addItem(item); 
    toast.success(`Agregado: ${item.name}`);
  }

  return { orderItem };
}
