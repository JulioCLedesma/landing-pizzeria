import "bootstrap-icons/font/bootstrap-icons.css";

const PHONE = "5213312345678"; // <-- cámbialo a tu número en formato internacional
const TEXT  = "Hola Pizzería Luigi’s, quiero hacer un pedido 🍕";

export default function WhatsAppFab() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(TEXT)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Escríbenos por WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true" />
    </a>
  );
}
