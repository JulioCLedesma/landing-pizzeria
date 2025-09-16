export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span className="fw-semibold">© {new Date().getFullYear()} Pizzería</span>
        <div className="d-flex align-items-center gap-3 fs-4">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-whatsapp"></i>
        </div>
      </div>
    </footer>
  )
}
