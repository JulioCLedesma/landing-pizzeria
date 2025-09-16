// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilos (tu tema + íconos)
import './styles/theme.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// JS de Bootstrap (tooltips, navbar, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Promos from './pages/Promos'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'promos', element: <Promos /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
