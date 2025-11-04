import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import CheckoutButton from "../components/CheckoutButton";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Ordenar() {
  const { items, inc, dec, remove, clear, total } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const handled = useRef(false);

  // 1) Detecta query params y pásalos a sessionStorage; luego limpia la URL
  useEffect(() => {
    if (handled.current) return;
    const params = new URLSearchParams(location.search);
    const ok = params.get("success") === "true";
    const canceled = params.get("canceled") === "true";

    if (ok) {
      sessionStorage.setItem("order:success", "1");
      handled.current = true;
      navigate("/ordenar", { replace: true });
    } else if (canceled) {
      sessionStorage.setItem("order:canceled", "1");
      handled.current = true;
      navigate("/ordenar", { replace: true });
    }
  }, [location.search, navigate]);

  // 2) Muestra el toast (y limpia carrito) después de la navegación
  useEffect(() => {
    if (sessionStorage.getItem("order:success")) {
      sessionStorage.removeItem("order:success");
      // pequeño defer para asegurar que el ToastContainer ya está en el DOM
      setTimeout(() => {
        toast.success("✅ Pedido realizado con éxito. ¡Gracias por tu compra!");
        clear();
      }, 0);
    } else if (sessionStorage.getItem("order:canceled")) {
      sessionStorage.removeItem("order:canceled");
      setTimeout(() => {
        toast.info("⚠️ Pago cancelado. Puedes intentarlo de nuevo.");
      }, 0);
    }
  }, [clear]);


  if (!items.length) {
    return (
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-3">Tu pedido está vacío</h2>
          <Link to="/menu" className="btn btn-primary">Ver menú</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-6 fw-bold mb-4">Ordenar</h1>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(it => (
                <tr key={it.name}>
                  <td className="d-flex align-items-center gap-3">
                    <img src={it.img} alt={it.name} width={64} height={64} />
                    <span>{it.name}</span>
                  </td>
                  <td>${it.price}</td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" onClick={() => dec(it.name)}>-</button>
                      <button className="btn btn-light" disabled>{it.qty}</button>
                      <button className="btn btn-outline-secondary" onClick={() => inc(it.name)}>+</button>
                    </div>
                  </td>
                  <td>${(it.price * it.qty).toFixed(2)}</td>
                  <td><button className="btn btn-sm btn-outline-danger" onClick={() => remove(it.name)}>Quitar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-outline-secondary" onClick={clear}>Vaciar</button>
          <h4 className="m-0">Total: ${total.toFixed(2)}</h4>
        </div>
        <div className="d-flex justify-content-end gap-2 mt-3">
          <CheckoutButton />
        </div>
      </div>
    </section>
  );
}
