export default function Home() {
  return (
    <section className="text-center py-5">
      <h1 className="display-4 fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
        Simple & Tasty Pizzas
      </h1>
      <p className="lead text-muted">Hechas con ingredientes frescos, listas para ti.</p>
      <a className="btn btn-cta mt-2" href="/menu">Ver menú</a>
    </section>
  )
}
