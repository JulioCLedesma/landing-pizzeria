// src/pages/Contact.tsx
export default function Contact() {
  // Cambia por tu dirección real
  const address = 'Av. Principal 123, Col. Centro'
  // Embed público sin API key
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
  // Link para abrir Maps en pestaña nueva
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section className="py-5">
      <h1 className="display-5 fw-bold mb-4">Contacto</h1>

      <div className="row g-4">
        {/* Formulario */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    placeholder="Tu nombre"
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
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa + datos */}
        <div className="col-12 col-lg-4">
          {/* Mapa como hero de la tarjeta */}
          <div className="card shadow-sm border-0 overflow-hidden mb-3">
            <div className="ratio ratio-4x3">
              <iframe
                title="Ubicación en Google Maps"
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
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

          {/* Datos de contacto */}
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
  )
}
