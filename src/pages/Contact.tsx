export default function Contact() {
  return (
    <section className="py-5">
      <h1 className="display-5 fw-bold mb-4">Contacto</h1>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input id="name" className="form-control" placeholder="Tu nombre" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Correo</label>
                  <input id="email" type="email" className="form-control" placeholder="tucorreo@ejemplo.com" />
                </div>
                <div className="col-12">
                  <label htmlFor="msg" className="form-label">Mensaje</label>
                  <textarea id="msg" rows={4} className="form-control" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card bg-light border-0">
            <div className="card-body">
              <p className="mb-1"><strong>Dirección:</strong></p>
              <p className="mb-2">Av. Principal 123, Col. Centro</p>
              <p className="mb-1"><strong>Horario:</strong></p>
              <p className="mb-2">Lun-Dom 12:00–23:00</p>
              <p className="mb-1"><strong>Teléfono:</strong></p>
              <p className="mb-0">33 1234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
