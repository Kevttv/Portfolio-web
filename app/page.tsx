import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact, FaRobot } from 'react-icons/fa'
import { SiZapier, SiFacebook, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Introduction */}
      <section id='introduction' className='text-center p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Hola, soy Kevin</h1>
            <p className="text-xl mb-4 text-black dark:text-white">Desarrollador Full Stack Junior</p>
            <p className="text-xl mb-4 gradient-text">Conocido como Kevttv</p>
          </div>

          <div className="md:w-1/3">
            <Image
              src="/kevttv-avatar.jpg"
              alt="Kevttv"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-[#6C5DD3]"
            />
          </div>
        </div>
      </section>

      {/* About me */}
      <section id="sobre-mi" className="text-center p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Sobre mi</h2>
        <p className="text-gray-600 max-w-2xl mx-auto dark:text-white">
          Soy Kevin Virgen Tapasco, un tecnólogo en Análisis y Desarrollo de Software, tengo 19 años de edad. Me apasiona explorar la inteligencia artificial, las integraciones y desarrollar soluciones innovadoras, especialmente en plataformas educativas. Me gusta la música, los videojuegos y caminar al aire libre. Disfruto compartir tiempo con mi familia y amigos, y trabajo muy bien en equipo. Siempre busco oportunidades para aprender y crecer en el mundo de la programación.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="text-center gradient-text p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLaravel className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>Laravel</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>Next Js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
            <span className='text-gray-600 dark:text-white'>Tailwind CSS</span>
          </div>
        </div>
      </section>

      <section id='integrations' className="text-center gradient-text p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Integraciones</h2>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <SiZapier className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
              <span className="text-gray-600 dark:text-white">Zapier</span>
            </div>
            <div className="flex flex-col items-center">
              <FaRobot className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
              <span className="text-gray-600 dark:text-white">ChatGPT API</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFacebook className="w-16 h-16 text-purple-900 dark:text-[#6C5DD3] mb-2" />
              <span className="text-gray-600 dark:text-white">Facebook API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="titulos" className="text-center p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Títulos y Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="relative aspect-[16/9] w-full mb-4">
              <Image
                src="/certificado.png"
                alt="Certificado Tecnólogo"
                fill
                className="rounded-lg object-contain"
                priority={false}
                loading="lazy"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tecnólogo en Análisis y Desarrollo de Software
            </p>
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/1ktGK2LzZKIluTG8J9LzySY5w63z_ikbQ/view?usp=drive_link"
                target='_blank'
                rel="noopener noreferrer"
                className="text-[#6C5DD3] hover:text-[#7a69da] transition-colors duration-300"
              >
                Ver Certificado
              </a>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="relative aspect-[16/9] w-full mb-4">
              <Image
                src="/certificado-ingles.png"
                alt="Certificado Ingles"
                fill
                className="rounded-lg object-contain"
                priority={false}
                loading="lazy"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Curso Inglés BBE Languages
            </p>
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/1uSPB5ggRYbXWf97ytvD9IsVhA8i8n8o7/view?usp=drive_link"
                target='_blank'
                rel="noopener noreferrer"
                className="text-[#6C5DD3] hover:text-[#7a69da] transition-colors duration-300"
              >
                Ver Certificado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className='text-center p-10 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <img src="/simply-export-app.png" alt="Simply Export App" className="rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#6C5DD3]">Simply Export App</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Una aplicación web para exportar datos de manera eficiente.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tecnologías: HTML, CSS, JavaScript</p>
            <div className="mt-4">
              <a
                href="https://simply-export-app.vercel.app/"
                target='_blank'
                rel="noopener noreferrer"
                className="text-[#6C5DD3] hover:text-[#7a69da] transition-colors duration-300"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400 text-center">Próximo proyecto en proceso</p>
          </div>
        </div>
      </section>
    </div>
  )
}