export default function Menu() {
  const items = [
    // Rutas corregidas: Se quita "public/"
    { name: 'Margherita', desc: 'Tomate, mozzarella, albahaca fresca.', price: 149, img: '/4.png' },
    { name: 'Pepperoni', desc: 'Clásica con pepperoni crujiente.', price: 169, img: '/5.png' },
    { name: 'Cuatro Quesos', desc: 'Mozzarella, gorgonzola, parmesano, provolone.', price: 189, img: '/6.png' },
    { name: 'Hawaiana', desc: 'Jamón y piña (sí, somos #TeamPiña).', price: 169, img: '/2.png' },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-4 font-playfair">Menú</h1>
        <div className="row g-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src={it.img} className="card-img-top p-4" alt={it.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-playfair">{it.name}</h5>
                  <p className="card-text small flex-grow-1">{it.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold">${it.price}</span>
                    <button className="btn btn-sm btn-primary">Ordenar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


