export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand brand-italy text-primary" href="/">Pizzería Luiguis</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><a className="nav-link" href="/menu">Menú</a></li>
            <li className="nav-item"><a className="nav-link" href="/us">Sobre Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="/promos">Contacto</a></li>
            <li className="nav-item"><a className="btn btn-cta" href="/contact">Ordenar</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
