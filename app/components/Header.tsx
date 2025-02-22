import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">

      <Link href="/" className="text-2xl font-bold gradient-text">
        Kevttv
      </Link>

    </header>
  )
}

