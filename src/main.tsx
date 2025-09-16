import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilos (tu tema + íconos)
import './styles/theme.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// JS de Bootstrap (tooltips, navbar, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Promos from './pages/Promos'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function AppLayout() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <AppLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'promos', element: <Promos /> },
      { path: 'contact', element: <Contact /> },
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

