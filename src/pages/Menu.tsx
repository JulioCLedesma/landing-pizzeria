export default function Menu() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-4 font-playfair">Menú</h1>
        <div className="row g-4">

          {/* Margherita */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src="/4.png" className="card-img-top p-4" alt="Margherita" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title font-playfair">Margherita</h5>
                <p className="card-text small flex-grow-1">Tomate, mozzarella, albahaca fresca.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold">$149</span>
                  <button className="btn btn-sm btn-primary">Ordenar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Pepperoni */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src="/5.png" className="card-img-top p-4" alt="Pepperoni" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title font-playfair">Pepperoni</h5>
                <p className="card-text small flex-grow-1">Clásica con pepperoni crujiente.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold">$169</span>
                  <button className="btn btn-sm btn-primary">Ordenar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Cuatro Quesos */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src="/6.png" className="card-img-top p-4" alt="Cuatro Quesos" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title font-playfair">Cuatro Quesos</h5>
                <p className="card-text small flex-grow-1">Mozzarella, gorgonzola, parmesano, provolone.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold">$189</span>
                  <button className="btn btn-sm btn-primary">Ordenar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hawaiana */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src="/2.png" className="card-img-top p-4" alt="Hawaiana" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title font-playfair">Hawaiana</h5>
                <p className="card-text small flex-grow-1">Jamón y piña (sí, somos #TeamPiña).</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold">$169</span>
                  <button className="btn btn-sm btn-primary">Ordenar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

