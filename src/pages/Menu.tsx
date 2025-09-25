import imgMargherita from '../assets/4.png';
import imgPepperoni from '../assets/5.png';
import imgCuatroQuesos from '../assets/6.png';
import imgHawaiana from '../assets/2.png';

// Este es el arreglo de datos de nuestro menú
const menuItems = [
  { name: 'Margherita', desc: 'Tomate, mozzarella, albahaca fresca.', price: 149, img: imgMargherita },
  { name: 'Pepperoni', desc: 'Clásica con pepperoni crujiente.', price: 169, img: imgPepperoni },
  { name: 'Cuatro Quesos', desc: 'Mozzarella, gorgonzola, parmesano, provolone.', price: 189, img: imgCuatroQuesos },
  { name: 'Hawaiana', desc: 'Jamón y piña (sí, somos #TeamPiña).', price: 169, img: imgHawaiana },
];

export default function Menu() {
  // Imprimimos los datos en la consola del navegador para depurar
  console.log("Datos del menú cargados:", menuItems);

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="display-5 fw-bold mb-4 font-playfair">Menú</h1>
        <div className="row g-4">
          {menuItems.map((item) => (
            <div key={item.name} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src={item.img} className="card-img-top p-4" alt={item.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-playfair">{item.name}</h5>
                  <p className="card-text small flex-grow-1">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold">${item.price}</span>
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

