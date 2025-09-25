export default function Promos() {
  const promos = [
    { title: 'Martes 2x1', desc: 'Aplica en pizzas medianas seleccionadas.', tag: 'Solo martes', color: 'danger' },
    { title: 'Combo Familiar', desc: '2 pizzas + 1 pasta + 2 refrescos.', tag: 'Fin de semana', color: 'primary' },
    { title: 'Estudiantes -15%', desc: 'Con credencial vigente.', tag: 'Todos los días', color: 'success' },
  ];

  return (
    <section className="py-5">
      <h1 className="display-5 fw-bold mb-4">Promociones</h1>
      <div className="row g-4">
        {promos.map((p, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            {/* He reemplazado el style en línea por la clase 'border-4' de Bootstrap,
              que hace lo mismo que border-top-width: 4px pero de forma más limpia.
            */}
            <div className={`card h-100 shadow-sm border-0 border-top border-4 border-${p.color}`}>
              <div className="card-body d-flex flex-column">
                <span className={`badge bg-${p.color} align-self-start mb-3`}>{p.tag}</span>
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p className="card-text flex-grow-1">{p.desc}</p>
                <button className={`btn btn-outline-${p.color} btn-sm mt-auto`}>Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

