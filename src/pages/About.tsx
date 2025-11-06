export default function About() {
  return (
    <section className="py-5">
      {/* Submenú anclado */}
      <div className="mb-4">
        <ul className="nav nav-pills gap-2 flex-wrap">
          <li className="nav-item">
            <a className="nav-link active" href="#historia">
              Historia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#valores">
              Valores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#linea">
              Línea del tiempo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#proceso">
              Proceso artesanal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#equipo">
              Nuestro equipo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#compromiso">
              Compromisos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Historia */}
      <div id="historia" className="row align-items-center g-5">
        {/* Columna de la Imagen */}
        <div className="col-12 col-lg-6">
          <img
            src="/historia.jpg"
            alt="El interior de la cocina de Pizzería Luiguis"
            className="img-fluid rounded shadow-lg about-image"
          />
        </div>

        {/* Columna del Texto */}
        <div className="col-12 col-lg-6">
          <h1 className="display-4 fw-bold lh-1 mb-3 font-playfair">
            Nuestra Historia
          </h1>
          <p className="lead text-muted">
            Desde 1985, Pizzería Luiguis ha sido más que un restaurante; es un
            punto de encuentro donde la tradición y el sabor se unen para crear
            momentos inolvidables.
          </p>
          <p>
            Nuestra pasión por los ingredientes frescos y las recetas que han
            pasado de generación en generación nos impulsa cada día. Creemos que
            una gran pizza es el resultado del amor, la dedicación y, por
            supuesto, el toque secreto de la abuela.
          </p>
        </div>
      </div>

      {/* Sección de Valores */}
      <div id="valores" className="py-5 mt-4">
        <h2 className="text-center fw-bold mb-5 font-playfair">
          Lo Que Nos Hace Especiales
        </h2>
        <div className="row g-4 text-center">
          {/* Pasión Familiar */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h5 className="card-title fw-bold">Pasión Familiar</h5>
                <p className="card-text text-muted">
                  Cada pizza lleva el amor y la tradición de nuestra familia.
                </p>
              </div>
            </div>
          </div>

          {/* Ingredientes Frescos */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">
                  <i className="bi bi-flower1"></i>
                </div>
                <h5 className="card-title fw-bold">Ingredientes Frescos</h5>
                <p className="card-text text-muted">
                  Seleccionamos productos locales para un sabor inigualable.
                </p>
              </div>
            </div>
          </div>

          {/* Horno de Leña */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3">
                  <i className="bi bi-fire"></i>
                </div>
                <h5 className="card-title fw-bold">Horno de Leña</h5>
                <p className="card-text text-muted">
                  El corazón de nuestra cocina para un toque crujiente y único.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea del tiempo */}
      <div id="linea" className="py-5">
        <h2 className="fw-bold mb-4 font-playfair">Nuestra línea del tiempo</h2>
        <div className="list-group shadow-sm">
          <div className="list-group-item d-flex justify-content-between">
            <div>
              <span className="badge bg-dark me-2">1985</span>
              <strong>Nace Luiguis</strong>
              <div className="small text-muted">
                Una pequeña pizzería familiar abre sus puertas.
              </div>
            </div>
            <i className="bi bi-geo-alt text-muted"></i>
          </div>
          <div className="list-group-item d-flex justify-content-between">
            <div>
              <span className="badge bg-dark me-2">1995</span>
              <strong>Horno de leña</strong>
              <div className="small text-muted">
                Incorporamos nuestro horno de leña tradicional.
              </div>
            </div>
            <i className="bi bi-fire text-muted"></i>
          </div>
          <div className="list-group-item d-flex justify-content-between">
            <div>
              <span className="badge bg-dark me-2">2008</span>
              <strong>Ingredientes locales</strong>
              <div className="small text-muted">
                Alianzas con productores de la región.
              </div>
            </div>
            <i className="bi bi-basket text-muted"></i>
          </div>
          <div className="list-group-item d-flex justify-content-between">
            <div>
              <span className="badge bg-dark me-2">2018</span>
              <strong>Nuevas recetas</strong>
              <div className="small text-muted">
                Edición limitada inspirada en la Nonna.
              </div>
            </div>
            <i className="bi bi-star text-muted"></i>
          </div>
          <div className="list-group-item d-flex justify-content-between">
            <div>
              <span className="badge bg-dark me-2">2025</span>
              <strong>Luiguis hoy</strong>
              <div className="small text-muted">
                Seguimos creciendo sin perder la esencia.
              </div>
            </div>
            <i className="bi bi-heart text-muted"></i>
          </div>
        </div>
      </div>

      {/* Proceso artesanal */}
      <div id="proceso" className="py-5">
        <h2 className="fw-bold mb-4 font-playfair">Así hacemos cada pizza</h2>
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-5 mb-2">
                  <i className="bi bi-egg-fried"></i>
                </div>
                <h6 className="fw-bold">Masa del día</h6>
                <p className="text-muted small mb-0">
                  Fermentación lenta y estirada a mano.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-5 mb-2">
                  <i className="bi bi-droplet-half"></i>
                </div>
                <h6 className="fw-bold">Salsa casera</h6>
                <p className="text-muted small mb-0">
                  Jitomate de temporada y especias frescas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-5 mb-2">
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <h6 className="fw-bold">Queso artesanal</h6>
                <p className="text-muted small mb-0">
                  Mezcla especial para derretir perfecto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-5 mb-2">
                  <i className="bi bi-fire"></i>
                </div>
                <h6 className="fw-bold">Horno de leña</h6>
                <p className="text-muted small mb-0">
                  Ese toque ahumado que nos distingue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compromisos / Ingredientes locales */}
      <div id="compromiso" className="py-5">
        <h2 className="fw-bold mb-4 font-playfair">Nuestros compromisos</h2>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold">
                  <i className="bi bi-leaf me-2"></i>Ingredientes de origen
                  local
                </h6>
                <p className="text-muted small mb-0">
                  Trabajamos con productores de la región para garantizar
                  frescura y apoyar la economía local.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold">
                  <i className="bi bi-recycle me-2"></i>Sustentabilidad
                </h6>
                <p className="text-muted small mb-0">
                  Reducción de plásticos, empaques reciclables y aprovechamiento
                  responsable de insumos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold">
                  <i className="bi bi-people me-2"></i>Comunidad
                </h6>
                <p className="text-muted small mb-0">
                  Apoyamos iniciativas locales y eventos escolares con menús
                  especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipo (diseño nuevo: avatar circular) */}
      <div id="equipo" className="py-5">
        <h2 className="fw-bold mb-4 font-playfair">Conoce al equipo</h2>

        <div className="row g-4">
          {[
            {
              name: 'Luigi C.',
              role: 'Fundador',
              photo: '/cheff.jpg',
              tag: 'Fundador',
            },
            {
              name: 'Anna R.',
              role: 'Maestra Pizzaiola',
              photo: '/maestra.jpg',
              tag: 'Pizzaiola',
            },
            {
              name: 'Marco S.',
              role: 'Control de Calidad',
              photo: '/equipo3.png',
              tag: 'Calidad',
            },
          ].map((m, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <div className="card team-circle h-100 border-0 shadow-sm text-center">
                <div className="team-circle__avatar mx-auto">
                  <img src={m.photo} alt={m.name} />
                </div>

                <div className="card-body">
                  <h5 className="fw-bold mb-1 font-playfair">{m.name}</h5>
                  <div className="text-muted small">{m.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-5">
        <h2 className="fw-bold mb-4 font-playfair">Preguntas frecuentes</h2>
        <div className="accordion">
          <div className="card mb-2">
            <button
              className="btn text-start fw-semibold"
              style={{ padding: '0.9rem 1rem' }}
            >
              ¿Siguen usando el mismo horno de 1985?
            </button>
            <div className="px-3 pb-3 text-muted">
              Mantenemos el legado con mantenimiento y mejoras, preservando el
              sabor original.
            </div>
          </div>
          <div className="card mb-2">
            <button
              className="btn text-start fw-semibold"
              style={{ padding: '0.9rem 1rem' }}
            >
              ¿Ofrecen opciones vegetarianas o sin gluten?
            </button>
            <div className="px-3 pb-3 text-muted">
              Sí, contamos con opciones vegetarianas y base sin gluten bajo
              pedido.
            </div>
          </div>
          <div className="card mb-2">
            <button
              className="btn text-start fw-semibold"
              style={{ padding: '0.9rem 1rem' }}
            >
              ¿Cómo puedo colaborar como proveedor local?
            </button>
            <div className="px-3 pb-3 text-muted">
              Escríbenos desde la página de contacto y cuéntanos sobre tus
              productos.
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center py-4">
        <a href="/menu" className="btn btn-primary me-2">
          Ver Menú
        </a>
        <a href="/promos" className="btn btn-outline-dark">
          Promociones vigentes
        </a>
      </div>
    </section>
  )
}
