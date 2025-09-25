export default function About() {
  return (
    <section className="py-5">
      <div className="row align-items-center g-5">
        {/* Columna de la Imagen */}
        <div className="col-12 col-lg-6">
          <img 
            src="https://placehold.co/600x450/A63429/FFFFFF?text=Nuestra+Cocina" 
            alt="El interior de la cocina de Pizzería Luiguis" 
            className="img-fluid rounded shadow-lg about-image"
          />
        </div>

        {/* Columna del Texto */}
        <div className="col-12 col-lg-6">
          <h1 className="display-4 fw-bold lh-1 mb-3 font-playfair">Nuestra Historia</h1>
          <p className="lead text-muted">
            Desde 1985, Pizzería Luiguis ha sido más que un restaurante; es un punto de encuentro donde la tradición y el sabor se unen para crear momentos inolvidables.
          </p>
          <p>
            Nuestra pasión por los ingredientes frescos y las recetas que han pasado de generación en generación nos impulsa cada día. Creemos que una gran pizza es el resultado del amor, la dedicación y, por supuesto, el toque secreto de la abuela.
          </p>
        </div>
      </div>

      {/* Sección de Valores */}
      <div className="py-5 mt-4">
        <h2 className="text-center fw-bold mb-5 font-playfair">Lo Que Nos Hace Especiales</h2>
        <div className="row g-4 text-center">
          
          {/* Valor 1: Pasión Familiar */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3"><i className="bi bi-heart-fill"></i></div>
                <h5 className="card-title fw-bold">Pasión Familiar</h5>
                <p className="card-text text-muted">Cada pizza lleva consigo el amor y la tradición de nuestra familia.</p>
              </div>
            </div>
          </div>

          {/* Valor 2: Ingredientes Frescos */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3"><i className="bi bi-flower1"></i></div>
                <h5 className="card-title fw-bold">Ingredientes Frescos</h5>
                <p className="card-text text-muted">Seleccionamos los mejores productos locales para un sabor inigualable.</p>
              </div>
            </div>
          </div>

          {/* Valor 3: Horno de Leña */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <div className="card-body">
                <div className="display-4 text-primary mb-3"><i className="bi bi-fire"></i></div>
                <h5 className="card-title fw-bold">Horno de Leña</h5>
                <p className="card-text text-muted">El corazón de nuestra cocina, que le da a cada pizza un sabor único y crujiente.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

