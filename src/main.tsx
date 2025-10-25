import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './styles/theme.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AppLayout from './AppLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Promos from './pages/Promos'
import Contact from './pages/Contact'
import About from './pages/About'
import Ordenar from './pages/Ordenar'
import CartProvider from './context/CartContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'ordenar', element: <Ordenar /> },
      { path: 'promos', element: <Promos /> },
      { path: 'contact', element: <Contact /> },
      { path: 'us', element: <About /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
