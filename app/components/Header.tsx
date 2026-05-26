'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleContent, isSupportedLocale, normalizeLocale } from '@/app/i18n/content'

function getLocaleSwitchPath(pathname: string, targetLocale: 'es' | 'en') {
  const segments = pathname.split('/')

  if (isSupportedLocale(segments[1])) {
    segments[1] = targetLocale
    return segments.join('/') || `/${targetLocale}`
  }

  return `/${targetLocale}`
}

export default function Header() {
  const pathname = usePathname()
  const locale = normalizeLocale(pathname?.split('/')[1])
  const content = getLocaleContent(locale)

  const navItems = [
    { href: '#about', label: content.nav.about },
    { href: '#impact', label: content.nav.impact },
    { href: '#stack', label: content.nav.stack },
    { href: '#projects', label: content.nav.projects },
    { href: '#certs', label: content.nav.certs },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-none md:bg-[var(--bg-primary)]/92 md:backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-sm">
          <span className="terminal-line">~ kevttv</span>
          <span className="hidden text-[var(--text-muted)] sm:inline">{content.header.terminalPath}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-3 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-alt)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-1 sm:flex">
            <span className="px-2 text-xs text-[var(--text-muted)]">{content.header.localeLabel}</span>
            {(['es', 'en'] as const).map((targetLocale) => (
              <Link
                key={targetLocale}
                href={getLocaleSwitchPath(pathname ?? '/', targetLocale)}
                className={`rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === targetLocale
                    ? 'bg-[var(--accent-main)] text-[var(--btn-text)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]'
                }`}
              >
                {targetLocale}
              </Link>
            ))}
          </div>

          <a
            href="mailto:kevttv29@gmail.com"
            className="rounded-lg bg-[var(--accent-main)] px-3 py-1.5 text-xs font-semibold text-[var(--btn-text)] transition-opacity hover:opacity-85"
          >
            {content.header.contactButton}
          </a>
        </div>
      </div>
    </header>
  )
}