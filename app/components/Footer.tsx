'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { getLocaleContent, normalizeLocale } from '@/app/i18n/content'

export default function Footer() {
  const pathname = usePathname()
  const locale = normalizeLocale(pathname?.split('/')[1])
  const content = getLocaleContent(locale)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-[var(--border-color)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="terminal-line text-xs">{content.footer.command}</p>
          <p className="text-sm text-[var(--text-muted)]">{content.footer.slogan}</p>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            &copy; {currentYear} {content.footer.copyright}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kevttv"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevttv-dev"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a href="mailto:kevttv29@gmail.com" className="icon-button" aria-label="Email">
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}