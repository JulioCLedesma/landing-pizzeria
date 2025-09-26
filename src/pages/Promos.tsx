export default function Promos() {
  const promos = [
    {
      title: 'Martes 2x1',
      desc: 'Aplica en pizzas medianas seleccionadas.',
      tag: 'Solo martes',
      color: 'danger',
      img: '/medianas.jpg',
    },
    {
      title: 'Combo Familiar',
      desc: '2 pizzas + 1 pasta + 2 refrescos.',
      tag: 'Fin de semana',
      color: 'primary',
      img: '/familiar.jpg',
    },
    {
      title: 'Estudiantes -15%',
      desc: 'Con credencial vigente.',
      tag: 'Todos los días',
      color: 'success',
      img: '/estudiante.jpg',
    },
  ];

  return (
    <section className="py-5">
      <h1 className="display-5 fw-bold mb-4">Promociones</h1>
      <div className="row g-4">
        {promos.map((p, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <article className={`card h-100 shadow-sm border-0 border-top border-4 border-${p.color} promo-card`}>
              {/* Hero de la tarjeta */}
              <div className="promo-thumb">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className={`promo-chip text-white bg-${p.color}`}>{p.tag}</span>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-2">{p.title}</h5>
                <p className="card-text flex-grow-1 text-muted">{p.desc}</p>
                <button className={`btn btn-outline-${p.color} btn-sm mt-auto`}>Ordenar</button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
