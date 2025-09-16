// src/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function AppLayout() {
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
