import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={`${inter.className} bg-gradient-to-br from-[#000000] to-[#0A2540] text-gray-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

