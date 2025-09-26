import { useCallback, useEffect, useRef, useState } from "react";
// SOLUCIÓN: Se cambia la importación a una ruta relativa para evitar problemas con el alias en Vercel.
import { DIDI_STORE_WEB, DIDI_APP_URI } from "./config";
import "bootstrap-icons/font/bootstrap-icons.css";

type Props = {
  className?: string;
  source?: string; // "hero" | "menu" | "footer" | ...
};

const buildTrackedUrl = (base: string, source = "landing") => {
  // Se añade validación para evitar que la app se rompa si la URL es inválida
  if (!base || !base.startsWith("http")) {
    console.warn(`[buildTrackedUrl] URL base inválida: ${base}`);
    return "#";
  }
  const url = new URL(base);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", "order_cta");
  return url.toString();
};

export default function OrderOnDiDi({ className = "", source = "landing" }: Props) {
  const [showQR, setShowQR] = useState(false);
  const clickTimer = useRef<number | null>(null);

  const webUrl = buildTrackedUrl(DIDI_STORE_WEB, source);
  const appUri = DIDI_APP_URI?.trim();

  const openDiDi = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (webUrl === "#") {
        alert("La opción para ordenar por DiDi no está disponible en este momento.");
        return;
    }
    if (appUri) {
      const now = Date.now();
      window.location.href = appUri;
      clickTimer.current = window.setTimeout(() => {
        if (Date.now() - now < 3000) window.location.href = webUrl;
      }, 800);
      return;
    }
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }, [appUri, webUrl]);

  useEffect(() => {
    return () => { if (clickTimer.current) clearTimeout(clickTimer.current); };
  }, []);

  return (
    <>
      <div className={`d-inline-flex align-items-center gap-2 ${className}`}>
        <a
          href={appUri || webUrl}
          onClick={openDiDi}
          className="btn btn-didi"
          rel="noopener noreferrer"
          target={appUri ? undefined : "_blank"}
          aria-label="Ordenar en DiDi"
        >
          <i className="bi bi-bag-fill me-2" aria-hidden="true" />
          Ordenar en DiDi
        </a>

        <button
          type="button"
          className="btn btn-outline-secondary d-none d-md-inline-flex"
          onClick={() => setShowQR(true)}
          aria-label="Mostrar QR de DiDi"
          title="Escanéame con tu celular"
        >
          <i className="bi bi-qr-code" />
        </button>
      </div>

      {showQR && (
        <div className="qr-backdrop" onClick={() => setShowQR(false)}>
          <div className="qr-card" onClick={(e) => e.stopPropagation()}>
            <h6 className="mb-3">Escanea para ordenar</h6>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(webUrl)}`}
              alt="QR para ordenar en DiDi"
            />
            <button className="btn btn-dark mt-3" onClick={() => setShowQR(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

