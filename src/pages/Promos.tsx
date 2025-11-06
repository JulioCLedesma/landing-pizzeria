// src/pages/Promos.tsx
import { useState, type ReactNode } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../hooks/useCart'

interface Promo {
  title: string
  desc: string
  tag: string
  color: string
  img: string
  price: number
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="h3 fw-bold mb-3 pt-4">
      {children}
    </h2>
  )
}

function PromoCard({ p, onOrder }: { p: Promo; onOrder: (p: Promo) => void }) {
  return (
    <article
      className={`card h-100 shadow-sm border-0 border-top border-4 border-${p.color} promo-card`}
    >
      <div className="promo-thumb">
        <img src={p.img} alt={p.title} loading="lazy" />
        <span className={`promo-chip text-white bg-${p.color}`}>{p.tag}</span>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-1">{p.title}</h5>
        <p className="card-text text-muted flex-grow-1">{p.desc}</p>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span className="fw-bold">${p.price}</span>
          <button
            className={`btn btn-outline-${p.color} btn-sm`}
            onClick={() => onOrder(p)}
          >
            Ordenar
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Promos() {
  const { addItem } = useCart()
  const [coupon, setCoupon] = useState('')

  // Promos principales
  const promos: Promo[] = [
    {
      title: 'Martes 2x1',
      desc: 'Aplica en pizzas medianas seleccionadas.',
      tag: 'Solo martes',
      color: 'danger',
      img: '/medianas.jpg',
      price: 200,
    },
    {
      title: 'Combo Familiar',
      desc: '2 pizzas + 1 pasta + 2 refrescos.',
      tag: 'Fin de semana',
      color: 'primary',
      img: '/familiar.jpg',
      price: 450,
    },
    {
      title: 'Estudiantes -15%',
      desc: 'Con credencial vigente.',
      tag: 'Todos los días',
      color: 'success',
      img: '/estudiante.jpg',
      price: 150,
    },
  ]

  // Paquetes extra
  const bundles: Promo[] = [
    {
      title: 'Pareja (2 personas)',
      desc: 'Pizza mediana + 2 bebidas + 1 postre.',
      tag: 'Nuevo',
      color: 'warning',
      img: '/pareja.jpg',
      price: 239,
    },
    {
      title: 'Oficina (4-5 pers.)',
      desc: '2 medianas + pan de ajo + 5 refrescos.',
      tag: 'Ahorra más',
      color: 'info',
      img: '/oficina.jpg',
      price: 499,
    },
    {
      title: 'Fiesta (8-10 pers.)',
      desc: '3 familiares + 2 pastas + 10 refrescos.',
      tag: 'Evento',
      color: 'dark',
      img: '/fiesta.jpg',
      price: 1099,
    },
  ]

  const handleOrder = (p: Promo) => {
    // Solo las propiedades que tu Addable acepta
    addItem({
      name: p.title,
      price: p.price,
      img: p.img,
    })
    toast.success(`Agregado: ${p.title}`)
  }

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase()
    if (!code) {
      toast.info('Escribe un código.')
      return
    }

    if (['PIZZA10', 'BIENVENIDO', 'LUIGUIS15'].includes(code)) {
      toast.success(`Cupón aplicado: ${code}`)
      setCoupon('')
    } else {
      toast.error('Cupón no válido.')
    }
  }

  // FAQ controlado
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i)

  return (
    <section className="py-5">
      {/* HERO + submenú */}
      <div className="mb-4">
        <h1 className="display-5 fw-bold mb-2">Promociones</h1>
        <p className="text-muted mb-3">
          Ahorra en tus favoritas y arma el plan perfecto para hoy.
        </p>

        <nav className="mb-2">
          <ul className="nav nav-pills gap-2 flex-wrap">
            <li className="nav-item">
              <a className="nav-link active" href="#destacadas">
                Destacadas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#paquetes">
                Paquetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#happy">
                Happy Hour
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cupones">
                Cupones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <a href="/ordenar" className="btn btn-success btn-sm">
          Ordenar ahora
        </a>
      </div>

      {/* Destacadas */}
      <SectionTitle id="destacadas">Promos destacadas</SectionTitle>
      <div className="row g-4">
        {promos.map((p, i) => (
          <div key={`p-${i}`} className="col-12 col-md-6 col-lg-4">
            <PromoCard p={p} onOrder={handleOrder} />
          </div>
        ))}
      </div>

      {/* Paquetes */}
      <SectionTitle id="paquetes">Paquetes para compartir</SectionTitle>
      <div className="row g-4">
        {bundles.map((p, i) => (
          <div key={`b-${i}`} className="col-12 col-md-6 col-lg-4">
            <PromoCard p={p} onOrder={handleOrder} />
          </div>
        ))}
      </div>

      {/* Happy Hour */}
      <SectionTitle id="happy">Happy Hour (4:00–6:00 PM)</SectionTitle>
      <div className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="list-group shadow-sm">
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>2x1 en rebanadas</strong>
                <div className="small text-muted">Solo en mostrador</div>
              </div>
              <span className="badge bg-danger">Hoy</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>-20% en bebidas</strong>
                <div className="small text-muted">Refrescos y agua</div>
              </div>
              <span className="badge bg-primary">Diario</span>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Combo snack $89</strong>
                <div className="small text-muted">Pan de ajo + dip</div>
              </div>
              <span className="badge bg-success">Limitado</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="fw-bold">Tip</h5>
              <p className="text-muted flex-grow-1">
                Llega temprano y combina Happy Hour con una de nuestras
                promociones destacadas para el mejor precio del día.
              </p>
              <a
                href="/menu"
                className="btn btn-outline-dark btn-sm mt-auto"
              >
                Ver menú completo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cupones */}
      <SectionTitle id="cupones">Cupones</SectionTitle>
      <div className="card shadow-sm mb-2">
        <div className="card-body d-flex flex-column flex-sm-row gap-2 align-items-stretch">
          <input
            className="form-control"
            placeholder="Ingresa tu código (p. ej., PIZZA10)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button className="btn btn-dark" onClick={handleApplyCoupon}>
            Aplicar
          </button>
        </div>
      </div>
      <div className="small text-muted mb-4">
        Algunos cupones no son acumulables. Aplican restricciones.
      </div>

      {/* FAQ */}
      <SectionTitle id="faq">Preguntas frecuentes</SectionTitle>
      <div className="accordion" role="tablist">
        {[
          {
            q: '¿Las promos aplican para comedor y a domicilio?',
            a: "Sí, salvo que el chip indique 'Solo mostrador'. Revisa cada tarjeta.",
          },
          {
            q: '¿Puedo combinar cupones con 2x1?',
            a: 'Generalmente no. En combos sí puedes usar un cupón del tipo porcentaje si no marca restricción.',
          },
          {
            q: '¿El descuento de estudiantes aplica fines de semana?',
            a: 'Sí, todos los días presentando credencial vigente al recibir el pedido.',
          },
        ].map((f, i) => (
          <div key={i} className="card mb-2">
            <button
              className="btn text-start fw-semibold"
              style={{ padding: '0.9rem 1rem' }}
              onClick={() => toggleFaq(i)}
              aria-expanded={faqOpen === i}
            >
              {f.q}
            </button>
            {faqOpen === i && (
              <div className="px-3 pb-3 text-muted" role="region">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Términos */}
      <div className="mt-4 small text-muted">
        <strong>Términos & condiciones.</strong> Vigencia y disponibilidad
        sujetas a cambio sin previo aviso. Imágenes ilustrativas. Los precios
        pueden variar por zona. Consulta condiciones en cada promoción.
      </div>
    </section>
  )
}
