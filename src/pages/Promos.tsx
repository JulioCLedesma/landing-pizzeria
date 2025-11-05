// src/pages/Promos.tsx
import { toast } from "react-toastify";
// 👇 ajusta esta ruta según tu estructura real:
import { useCart } from '../hooks/useCart';

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Define el tipo para tus promos, incluyendo el precio
interface Promo {
  title: string;
  desc: string;
  tag: string;
  color: string;
  img: string;
  price: number; // <-- ERROR 2: Faltaba esta propiedad
}

export default function Promos() {
  const { addItem } = useCart();

  // ERROR 2 CORREGIDO:
  // Añadimos precios a cada promoción
  const promos: Promo[] = [
    {
      title: 'Martes 2x1',
      desc: 'Aplica en pizzas medianas seleccionadas.',
      tag: 'Solo martes',
      color: 'danger',
      img: '/medianas.jpg',
      price: 200, // (precio de ejemplo)
    },
    {
      title: 'Combo Familiar',
      desc: '2 pizzas + 1 pasta + 2 refrescos.',
      tag: 'Fin de semana',
      color: 'primary',
      img: '/familiar.jpg',
      price: 450, // (precio de ejemplo)
    },
    {
      title: 'Estudiantes -15%',
      desc: 'Con credencial vigente.',
      tag: 'Todos los días',
      color: 'success',
      img: '/estudiante.jpg',
      price: 150, // (precio de ejemplo)
    },
  ];

  const handleOrder = (p: Promo) => {
    const id = `promo_${slugify(p.title)}`;

    // Arma el payload que espera tu CartContext
    const item = {
      id,
      name: p.title,
      price: p.price, // (Ya no necesitamos '?? 0' porque price está definido)
      // ERROR 3 CORREGIDO:
      // Cambiamos 'image' por 'img' para que coincida con tu tipo 'Addable'
      img: p.img, 
      type: "promo",
      // qty: 1, // si tu addItem requiere qty, descomenta
      // notes: "", // si manejas notas
    };

    addItem(item);
    toast.success(`Agregado: ${p.title}`);
  };

  
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
                {/* MEJORA: Añadido el onClick al botón */}
                <button 
                  className={`btn btn-outline-${p.color} btn-sm mt-auto`}
                  onClick={() => handleOrder(p)}
                >
                  Ordenar
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}