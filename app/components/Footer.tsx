import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/kevttv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white icon-hover">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/kevttv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white icon-hover">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="mailto:kevttv29@gmail.com" className="text-gray-400 hover:text-white icon-hover">
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-4 text-center text-gray-400">© 2024 Kevttv. Todos los derechos reservados.</p>
    </footer>
  )
}

