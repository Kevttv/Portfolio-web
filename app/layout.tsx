import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Sora } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import Fondo from './components/Fondo'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Kevttv | Portfolio',
  description: 'Portfolio bilingue con proyectos full stack, automatizacion y enfoque en experiencia de producto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sora.variable} ${jetBrainsMono.variable}`}>
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