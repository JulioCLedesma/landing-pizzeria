// src/components/Header.tsx
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top" style={{ zIndex: 1030 }}>
      <div className="container">
        <Link className="navbar-brand brand-italy text-primary" to="/">Pizzería Luiguis</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menú</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/us">Sobre Nosotros</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/promos">Promociones</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contacto</NavLink></li>
            <li className="nav-item"><Link className="btn btn-cta" to="/ordenar">Ordenar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
