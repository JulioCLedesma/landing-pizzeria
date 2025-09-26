// src/pages/Home.tsx
export default function Home() {
  return (
    <>
      <section className="py-5">
        <div className="row align-items-center g-2">
          {/* Texto (izquierda en md+) */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1
              className="display-1 fw-bold lh-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Simple &<br /> Tasty Pizzas
            </h1>

            <a className="btn btn-cta mt-3 me-md-3" href="/menu">
              Ver menú
            </a>

            <p className="lead text-muted mt-3 mb-0">
              Hechas con ingredientes frescos, listas para ti.
            </p>
          </div>

          {/* Imagen (derecha en md+) */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="/pizzaHeader.png"
              alt="Pizza recién horneada"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="our-menu" className="py-5">
        <h2
          id="our-menu"
          className="text-center fw-bold mb-4"
          style={{
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '.02em',
          }}
        >
          OUR MENU
        </h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {/* Item 1 */}
          <div className="col d-flex justify-content-center">
            <article className="text-center">
              <div className="menu-plate mx-auto mb-3">
                <img src="1.png" alt="Pizza Margherita" />
              </div>
              <h5
                className="fw-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Margherita
              </h5>
              <div className="price mb-3">$259</div>
              <a className="btn btn-cta" href="/menu#margherita">
                ORDENAR
              </a>
            </article>
          </div>

          {/* Item 2 */}
          <div className="col d-flex justify-content-center">
            <article className="text-center">
              <div className="menu-plate mx-auto mb-3">
                <img src="2.png" alt="Pizza Pepperoni" />
              </div>
              <h5
                className="fw-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Pepperoni
              </h5>
              <div className="price mb-3">$259</div>
              <a className="btn btn-cta" href="/menu#pepperoni">
                ORDENAR
              </a>
            </article>
          </div>

          {/* Item 3 */}
          <div className="col d-flex justify-content-center">
            <article className="text-center">
              <div className="menu-plate mx-auto mb-3">
                <img src="/4.png" alt="Pizza Veggie" />
              </div>
              <h5
                className="fw-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Veggie
              </h5>
              <div className="price mb-3">$249</div>
              <a className="btn btn-cta" href="/menu#veggie">
                ORDENAR
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* --- SPECIAL OFFER (full-bleed) --- */}
      <section className="py-5 px-0">
        <div className="promo-banner full-bleed position-relative overflow-hidden">
          <div className="container">
            <div className="row align-items-center g-0 py-4 py-md-5">
              {/* Texto */}
              <div className="col-12 col-md-7">
                <p
                  className="text-uppercase mb-2 fw-semibold small"
                  style={{ letterSpacing: '.15em', color: '#1E3B2E' }}
                >
                  Special offer
                </p>

                <h3
                  className="display-1 fw-bold lh-1 mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  2x1 on all pizzas
                </h3>

                <p className="text-muted mb-0">Only this weekend</p>
              </div>

              {/* Imagen */}
              <div className="col-12 col-md-5 p-4 p-md-5">
                <div className="promo-plates d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center">
                  <div className="promo-plate">
                    <img src="/5.png" alt="Pizza 1" className="img-fluid" />
                  </div>
                  <div className="promo-plate">
                    <img src="/8.png" alt="Pizza 2" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Franja oscura inferior */}
          <div className="promo-bar" />
        </div>
      </section>
    </>
  )
}
