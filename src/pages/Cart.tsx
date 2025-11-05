// src/pages/Cart.tsx
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Cart() {
  const ctx = useContext(CartContext);
  if (!ctx) return null;

  const { items, inc, dec, remove, clear, total } = ctx;

  return (
    <div className="container py-4">
      <h1 className="h3 mb-4">Carrito</h1>

      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="list-group mb-3">
            {items.map((i) => (
              <div key={i.name} className="list-group-item d-flex align-items-center">
                <img
                  src={i.img}
                  alt={i.name}
                  style={{ width: 56, height: 56, objectFit: "cover" }}
                  className="rounded me-3"
                />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{i.name}</div>
                  <div className="text-muted small">${i.price.toFixed(2)} MXN</div>
                </div>

                <div className="d-flex align-items-center me-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => dec(i.name)}>-</button>
                  <span className="mx-2">{i.qty}</span>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => inc(i.name)}>+</button>
                </div>

                <div className="me-3 fw-semibold">
                  ${(i.price * i.qty).toFixed(2)} MXN
                </div>

                <button className="btn btn-outline-danger btn-sm" onClick={() => remove(i.name)}>
                  <i className="bi bi-trash" /> Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-5 fw-bold">Total: ${total.toFixed(2)} MXN</div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary" onClick={clear}>Vaciar</button>
              <button className="btn btn-dark">Pagar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
