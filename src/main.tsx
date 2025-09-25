import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Estilos (Asegúrate de tener estos archivos en tu proyecto)
import './styles/theme.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

// JS de Bootstrap (si lo necesitas para componentes interactivos)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Componentes y Páginas
import AppLayout from './AppLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Promos from './pages/Promos';
import Contact from './pages/Contact';
import About from './pages/About'; // Añadida la página "Sobre Nosotros"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'promos', element: <Promos /> },
      { path: 'contact', element: <Contact /> },
      { path: 'us', element: <About /> }, // Ruta para "Sobre Nosotros"
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
