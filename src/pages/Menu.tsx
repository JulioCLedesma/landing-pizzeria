// CAMBIO: Se usan rutas absolutas desde la raíz del proyecto (/src)
import imgUno from '/src/assets/1.png'
import imgMargherita from '/src/assets/4.png'
import imgPepperoni from '/src/assets/5.png'
import imgCuatroQuesos from '/src/assets/6.png'
import imgHawaiana from '/src/assets/2.png'
import imgTres from '/src/assets/3.png'
import imgSiete from '/src/assets/7.png'
import imgOcho from '/src/assets/8.png'

import { useCallback, useRef } from 'react'
// Asegúrate de que este archivo exista y exporte las constantes
import { DIDI_STORE_WEB, DIDI_APP_URI } from '../components/config'

// Este es el arreglo de datos de nuestro menú
const menuItems = [
  {
    name: 'Margherita',
    desc: 'Tomate, mozzarella, albahaca fresca.',
    price: 149,
    img: imgMargherita,
  },
  {
    name: 'Pepperoni',
    desc: 'Clásica con pepperoni crujiente.',
    price: 169,
    img: imgPepperoni,
  },
  {
    name: 'Cuatro Quesos',
    desc: 'Mozzarella, gorgonzola, parmesano, provolone.',
    price: 189,
    img: imgCuatroQuesos,
  },
  {
    name: 'Hawaiana',
    desc: 'Jamón y piña (sí, somos #TeamPiña).',
    price: 169,
    img: imgHawaiana,
  },
  {
    name: 'Mexicana',
    desc: 'Chorizo, jalapeño, cebolla morada y elote.',
    price: 189,
    img: imgTres,
  },
  {
    name: 'BBQ Chicken',
    desc: 'Pollo a la BBQ, cebolla, mozzarella y cilantro.',
    price: 199,
    img: imgUno,
  },
  {
    name: 'Veggie Supreme',
    desc: 'Pimiento, champiñón, aceituna, cebolla y tomate.',
    price: 179,
    img: imgSiete,
  },
  {
    name: 'Diávola',
    desc: 'Salami picante, hojuelas de chile y mozzarella.',
    price: 199,
    img: imgOcho,
  },
]

// SOLUCIÓN: Se añade una validación para evitar el error si la URL base es inválida.
const buildTrackedUrl = (base: string, source = 'menu') => {
  // Si la URL base no es una cadena válida que empiece con http, no se puede construir.
  if (!base || !base.startsWith('http')) {
    console.warn('URL base de DiDi no configurada. Botón no funcional.')
    return '#' // Devuelve un enlace seguro para no romper la app
  }

  const url = new URL(base)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', 'website')
  url.searchParams.set('utm_campaign', 'order_cta')
  return url.toString()
}

export default function Menu() {
  const clickTimer = useRef<number | null>(null)

  const openDiDi = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const webUrl = buildTrackedUrl(DIDI_STORE_WEB, 'menu')
    const appUri = (DIDI_APP_URI ?? '').trim()

    // Si la URL web no es válida, no hacer nada.
    if (webUrl === '#') {
      alert('La opción de pedir por DiDi no está disponible en este momento.')
      return
    }

    if (appUri) {
      const now = Date.now()
      window.location.href = appUri
      clickTimer.current = window.setTimeout(() => {
        if (Date.now() - now < 3000)
          window.open(webUrl, '_blank', 'noopener,noreferrer')
      }, 800)
      return
    }

    window.open(webUrl, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-4 font-playfair">Menú</h1>
        <div className="row g-4">
          {menuItems.map((item) => (
            <div key={item.name} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.img}
                  className="card-img-top p-4"
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-playfair">{item.name}</h5>
                  <p className="card-text small flex-grow-1">{item.desc}</p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold">${item.price}</span>

                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary">
                        Ordenar
                      </button>

                      <a
                        href={buildTrackedUrl(DIDI_STORE_WEB, 'menu')}
                        onClick={openDiDi}
                        className="btn btn-sm btn-warning"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Pedir en DiDi"
                        title="Pedir en DiDi"
                      >
                        DiDi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

