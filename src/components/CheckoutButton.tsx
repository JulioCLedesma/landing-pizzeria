import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function CheckoutButton() {
  const ctx = useContext(CartContext);
  if (!ctx) return null;

  const { items } = ctx;

  const handleCheckout = async () => {
    if (!items.length) return alert("Tu carrito está vacío");

  const apiBase =
    window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "";

  const res = await fetch(`${apiBase}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });


    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // Redirige a Stripe Checkout
    } else {
      alert("Error al iniciar el pago");
    }
  };

  return (
    <button className="btn btn-dark" onClick={handleCheckout}>
      Pagar
    </button>
  );
}
