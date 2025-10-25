import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main id="content" className="flex-grow-1">
        <div className="container py-4">
          <Outlet />
        </div>
      </main>

      <Footer />
      <WhatsAppFab />

      {/* Contenedor global de toasts */}
      <ToastContainer position="top-right" autoClose={1400} newestOnTop />
    </div>
  )
}
