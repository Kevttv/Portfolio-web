import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
      <footer className="text-center p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/kevttv" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-600 dark:hover:text-white icon-hover">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kevttv-dev" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-600 dark:hover:text-white icon-hover">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:kevttv29@gmail.com" className="dark:text-gray-400 text-gray-600 dark:hover:text-white icon-hover">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4 text-center dark:text-gray-400 text-gray-600">© 2024 Kevttv. Todos los derechos reservados.</p>
      </footer>
    </div>

  )
}
