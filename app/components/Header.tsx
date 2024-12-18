import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Kevttv
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#sobre-mi" className="hover-gradient px-2 py-1 rounded">Sobre mí</Link></li>
          <li><Link href="#skills" className="hover-gradient px-2 py-1 rounded">Skills</Link></li>
          <li><Link href="#titulos" className="hover-gradient px-2 py-1 rounded">Títulos</Link></li>
          <li><Link href="#proyectos" className="hover-gradient px-2 py-1 rounded">Proyectos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

