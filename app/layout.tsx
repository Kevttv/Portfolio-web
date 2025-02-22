import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import Fondo from './components/Fondo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevttv | Desarrollador de Software',
  description: 'Portafolio de Kevttv, desarrollador de software apasionado y con experiencia en diversas tecnologías.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Fondo>
          <Header />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Footer />
        </Fondo>
      </body>
    </html>
  )
}