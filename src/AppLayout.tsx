// src/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* main ocupa el espacio disponible */}
      <main id="content" className="flex-grow-1">
        {/* puedes mantener tu container aquí si quieres */}
        <div className="container py-4">
          <Outlet />
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  )
}
