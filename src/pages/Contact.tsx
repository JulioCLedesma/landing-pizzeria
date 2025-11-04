// src/pages/Contact.tsx
import { useState } from "react";

// URL de tu API.
// Usamos una ruta relativa.
// En producción, Vercel la manejará (/api/contact).
// En desarrollo, esto requiere que tu 'vite.config.ts' tenga un proxy.
const API_URL = "/api/contact";

export default function Contact() {
  // --- Estados para el formulario ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Estado para la UI (enviando, éxito, error)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // --- Estados para el Mapa ---
  const address = "Av. Principal 123, Col. Centro";
  const mapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7465.843394804275!2d-103.42110879266772!3d20.672764413240056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1762293538035!5m2!1ses!2smx";
  const mapsLink = "https://maps.app.goo.gl/EvK4nTQoRZtTYWSCA";


  // --- Handler para enviar el formulario ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setFormStatus({
        type: "success",
        message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setFormStatus({
        type: "error",
        message: err.message || "Ocurrió un error. Intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section className="py-5">
      <h1 className="display-5 fw-bold mb-4">Contacto</h1>
      <div className="row g-4">
        {/* Formulario */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Correo
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="msg" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    className="form-control"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.g.target.value)}
                  ></textarea>
                </div>

                {formStatus && (
                  <div className="col-12">
                    <div
                      className={`alert ${
                        formStatus.type === "success"
                          ? "alert-success"
                          : "alert-danger"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  </div>
                )}

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa + datos (tu código original) */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 overflow-hidden mb-3">
            <div className="ratio ratio-4x3">
              <iframe
                title="Ubicación en Google Maps"
                src={mapsEmbedSrc} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen 
              />
            </div>
            <div className="card-body d-flex justify-content-between align-items.center">
              <small className="text-muted me-3">{address}</small>
              <a
                className="btn btn-sm btn-outline-primary"
                href={mapsLink} 
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Maps
              </a>
            </div>
          </div>
          <div className="card bg-light border-0">
            <div className="card-body">
              <p className="mb-1">
                <strong>Dirección:</strong>
              </p>
              <p className="mb-2">{address}</p>
              <p className="mb-1">
                <strong>Horario:</strong>
              </p>
              <p className="mb-2">Lun-Dom 12:00–23:00</p>
              <p className="mb-1">
                <strong>Teléfono:</strong>
              </p>
              <p className="mb-0">33 1234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
