"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import type React from "react"
import { usePathname } from "next/navigation"
import { getLocaleContent, normalizeLocale } from "@/app/i18n/content"

type Theme = "light" | "dark"

const THEME_KEY = "portfolio-theme"

function resolvePreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const locale = normalizeLocale(pathname?.split("/")[1])
  const content = getLocaleContent(locale)

  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : resolvePreferredTheme()
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const onChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) {
        const nextTheme = event.matches ? "dark" : "light"
        setTheme(nextTheme)
        applyTheme(nextTheme)
      }
    }

    mediaQuery.addEventListener("change", onChange)
    return () => {
      mediaQuery.removeEventListener("change", onChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
    applyTheme(newTheme)
  }

  return (
    <div className={`relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ${theme}`}>
      <div className="ambient-background" aria-hidden>
        <div className="ambient-orb orb-a" />
        <div className="ambient-orb orb-b" />
        <div className="ambient-orb orb-c" />
        <div className="ambient-grid" />
      </div>

      <button
        onClick={toggleTheme}
        className="fixed right-4 top-20 z-50 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/95 p-2.5 shadow-none transition-transform hover:translate-y-[-1px] md:bg-[var(--bg-secondary)]/85 md:shadow-[var(--shadow-soft)] md:backdrop-blur"
        aria-label={theme === "dark" ? content.themeToggle.toLight : content.themeToggle.toDark}
      >
        {theme === "dark" ? <Sun className="h-4 w-4 text-[var(--accent-contrast)]" /> : <Moon className="h-4 w-4 text-[var(--accent-main)]" />}
      </button>

      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  )
}