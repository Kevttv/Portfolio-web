"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import type React from "react"

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className={`min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300 ${theme}`}>
      {/* Fondo con círculos animados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos grandes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-4000"></div>

        {/* Círculos medianos */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-5000"></div>

        {/* Círculos pequeños */}
        <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-green-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-40 animate-blob animation-delay-6000"></div>
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {theme === "dark" ?
          <Sun className="text-yellow-400" /> :
          <Moon className="text-gray-700" />
        }
      </button>

      {/* Contenido */}
      <div className="relative z-10">

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div >
  )
}