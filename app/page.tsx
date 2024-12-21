import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      <section id="sobre-mi" className="text-center">
        <Image
          src="/kevttv-avatar.jpg"
          alt="Kevttv"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-[#6C5DD3]"
        />
        <h1 className="text-4xl font-bold mb-4 gradient-text">Kevttv</h1>
        <p className="text-xl mb-4 text-[#6C5DD3]">Desarrollador de Software</p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Soy Kevin Virgen Tapasco, un tecnólogo en Análisis y Desarrollo de Software, tengo 19 años de edad. Me apasiona explorar la inteligencia artificial, las integraciones y desarrollar soluciones innovadoras, especialmente en plataformas educativas. Me gusta la música, los videojuegos y caminar al aire libre. Disfruto compartir tiempo con mi familia y amigos, y trabajo muy bien en equipo. Siempre busco oportunidades para aprender y crecer en el mundo de la programación.
        </p>
      </section>

      <section id="skills" className="text-center">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLaravel className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>Laravel</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="w-16 h-16 text-[#6C5DD3] mb-2" />
            <span>React</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Integraciones</h3>
          <ul className="list-disc list-inside">
            <li>Zapier</li>
            <li>ChatGPT API</li>
            <li>API de conversiones de Facebook</li>
          </ul>
        </div>
      </section>

      <section id="titulos" className="text-center">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Títulos y Certificaciones</h2>
        <ul className="space-y-4">
          <li>Tecnólogo en Análisis y Desarrollo de Software</li>
        </ul>
      </section>

      <section id="proyectos">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Proyectos</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0A2540] to-[#000000] p-6 rounded-lg shadow-lg project-card max-w-sm">
            <img src="/simply-export-app.png" alt="Simply Export App" className="rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#6C5DD3]">Simply Export App</h3>
            <p className="text-gray-300 mb-4">Una aplicación web para exportar datos de manera eficiente.</p>
            <p className="text-sm text-gray-400">Tecnologías: HTML, CSS, JavaScript</p>
            <div className="mt-4">
              <a href="https://simply-export-app.vercel.app/" target='_blank' rel="noopener noreferrer" className="text-[#4B3F8C] py-2 rounded-lg hover:text-[#7a69da]">
                Ver Proyecto
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0A2540] to-[#000000] p-6 rounded-lg shadow-lg project-card border-2 border-dashed border-gray-600 flex items-center justify-center max-w-sm hover-gradient">
            <p className="text-gray-400 text-center">Próximo proyecto en proceso</p>
          </div>
        </div>
      </section>
    </div>
  )
}