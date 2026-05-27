export const supportedLocales = ['es', 'en'] as const

export type Locale = (typeof supportedLocales)[number]
export type StackGroupKey = 'frontend' | 'backend' | 'ai' | 'tooling'

export interface PortfolioDictionary {
  metadata: {
    title: string
    description: string
  }
  nav: {
    about: string
    impact: string
    stack: string
    projects: string
    certs: string
    contact: string
  }
  header: {
    terminalPath: string
    contactButton: string
    localeLabel: string
  }
  hero: {
    command: string
    name: string
    role: string
    age: string
    bio: string
    badges: string[]
    location: string
  }
  now: {
    command: string
    title: string
    description: string
    availability: string
  }
  impact: {
    command: string
    title: string
    items: Array<{
      label: string
      helper: string
    }>
  }
  stack: {
    command: string
    title: string
    groups: Array<{
      key: StackGroupKey
      title: string
      focus: string
      items: string[]
    }>
  }
  projects: {
    command: string
    title: string
    featuredLabel: string
    featured: {
      name: string
      description: string
      result: string
      tech: string[]
      image: string
      link?: string
      github?: string
    }
    sideLabel: string
    sideProjects: Array<{
      name: string
      description: string
      status: string
      link?: string
    }>
  }
  certs: {
    command: string
    title: string
    viewLabel: string
    items: Array<{
      name: string
      issuer: string
      image: string
      link: string
    }>
  }
  contact: {
    command: string
    title: string
    description: string
    cta: string
  }
  footer: {
    command: string
    slogan: string
    copyright: string
  }
  themeToggle: {
    toDark: string
    toLight: string
  }
}

const dictionary: Record<Locale, PortfolioDictionary> = {
  es: {
    metadata: {
      title: 'Kevttv | Desarrollador de Software',
      description:
        'Portafolio bento de Kevin Virgen Tapasco: desarrollo full stack, automatizaciones y productos web orientados a resultados.',
    },
    nav: {
      about: 'Sobre mi',
      impact: 'Impacto',
      stack: 'Stack',
      projects: 'Proyectos',
      certs: 'Certificados',
      contact: 'Contacto',
    },
    header: {
      terminalPath: '/portfolio',
      contactButton: 'Hablemos',
      localeLabel: 'Idioma',
    },
    hero: {
      command: '$ whoami',
      name: 'Kevin Virgen Tapasco',
      role: 'Full Stack Developer',
      age: '19 años',
      bio:
        'Tecnólogo en Análisis y Desarrollo de Software. Me enfoco en construir productos web rápidos, mantener código limpio y conectar servicios de IA para resolver problemas reales.',
      badges: ['Disponible para trabajar', 'Abierto a retos', 'Remoto o híbrido'],
      location: 'Colombia - GMT-5',
    },
    now: {
      command: '$ cat now.md',
      title: 'Ahora construyendo',
      description:
        'Refinando este portfolio con arquitectura bento, i18n y dark/light mode robusto para mejorar legibilidad y experiencia recruiter-friendly.',
      availability: 'Disponible para colaboraciones freelance y roles junior/semi-senior.',
    },
    impact: {
      command: '$ cat impact.log',
      title: 'Impacto y enfoque',
      items: [
        {
          label: 'Entregas confiables',
          helper: 'Priorizo requerimientos claros, estructura limpia y resultados medibles sin sobreprometer.',
        },
        {
          label: 'Interfaces claras',
          helper: 'Diseño flujos simples para tareas reales, cuidando legibilidad y consistencia.',
        },
        {
          label: 'Automatización con criterio',
          helper: 'Integro IA y automatizaciones cuando reducen fricción y mantienen control operativo.',
        },
      ],
    },
    stack: {
      command: '$ cat stack-map.json',
      title: 'Stack en uso actual',
      groups: [
        {
          key: 'frontend',
          title: 'Frontend',
          focus: 'Uso activo en proyectos web recientes.',
          items: ['React', 'Next.js', 'Tailwind CSS'],
        },
        {
          key: 'backend',
          title: 'Backend',
          focus: 'Base para APIs, módulos de negocio y paneles administrativos.',
          items: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
        },
        {
          key: 'ai',
          title: 'AI & Automation',
          focus: 'Integraciones puntuales para acelerar procesos.',
          items: ['OpenAI API', 'Zapier'],
        },
        {
          key: 'tooling',
          title: 'Tooling',
          focus: 'Flujo diario para desarrollo, despliegue y gestión básica de hosting.',
          items: ['Git / GitHub', 'Postman', 'Vercel', 'cPanel (cron jobs)'],
        },
      ],
    },
    projects: {
      command: '$ ls projects --featured',
      title: 'Proyectos',
      featuredLabel: 'Proyecto destacado',
      featured: {
        name: 'Simply Export App',
        description:
          'Aplicación web para exportación de datos de forma rápida y ordenada, enfocada en UX clara y procesos eficientes.',
        result: 'Flujo de exportación más simple para operaciones diarias.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/simply-export-app.png',
        link: 'https://simply-export-app.vercel.app/',
      },
      sideLabel: 'Planeando',
      sideProjects: [
        {
          name: 'Plataforma educativa',
          description: 'Plataforma para cursos y recursos con enfoque práctico y experiencia clara para estudiantes.',
          status: 'Planeando',
        },
        {
          name: 'Plantillas CRM en Laravel',
          description: 'Plantillas CRM listas para comprar, configurar y personalizar con varios estilos desde panel admin.',
          status: 'Planeando',
        },
        {
          name: 'Mis juegos y progreso',
          description: 'Tracking de partidas y página para mostrar logros de Steam y otras plataformas.',
          status: 'Planeando',
        },
      ],
    },
    certs: {
      command: '$ cat certs.md',
      title: 'Certificados',
      viewLabel: 'Ver certificado',
      items: [
        {
          name: 'Tecnólogo en Análisis y Desarrollo de Software',
          issuer: 'Institución Educativa',
          image: '/certificado.png',
          link: 'https://drive.google.com/file/d/1ktGK2LzZKIluTG8J9LzySY5w63z_ikbQ/view?usp=drive_link',
        },
        {
          name: 'English BBE Languages',
          issuer: 'BBE Languages',
          image: '/certificado-ingles.png',
          link: 'https://drive.google.com/file/d/1uSPB5ggRYbXWf97ytvD9IsVhA8i8n8o7/view?usp=drive_link',
        },
      ],
    },
    contact: {
      command: '$ echo $CONTACT',
      title: 'Construyamos algo que sí deje huella',
      description: 'Estoy disponible para oportunidades donde pueda aportar en producto, UI y automatización.',
      cta: 'Enviar correo',
    },
    footer: {
      command: '$ status --portfolio',
      slogan: 'Código con criterio, interfaces con intención.',
      copyright: 'Kevttv',
    },
    themeToggle: {
      toDark: 'Cambiar a modo oscuro',
      toLight: 'Cambiar a modo claro',
    },
  },
  en: {
    metadata: {
      title: 'Kevttv | Software Developer',
      description:
        'Bento portfolio by Kevin Virgen Tapasco: full stack development, AI automation, and product-focused web experiences.',
    },
    nav: {
      about: 'About',
      impact: 'Impact',
      stack: 'Stack',
      projects: 'Projects',
      certs: 'Certificates',
      contact: 'Contact',
    },
    header: {
      terminalPath: '/portfolio',
      contactButton: 'Let us talk',
      localeLabel: 'Language',
    },
    hero: {
      command: '$ whoami',
      name: 'Kevin Virgen Tapasco',
      role: 'Full Stack Developer',
      age: '19 years old',
      bio:
        'Software Analysis and Development technologist. I focus on shipping fast web products, keeping code clean, and integrating AI services to solve real operational needs.',
      badges: ['Open to work', 'Ready for challenges', 'Remote or hybrid'],
      location: 'Colombia - GMT-5',
    },
    now: {
      command: '$ cat now.md',
      title: 'Currently building',
      description:
        'Refining this portfolio with a bento architecture, robust i18n, and a better dark/light mode to improve readability and recruiter UX.',
      availability: 'Available for freelance collaborations and junior/semi-senior roles.',
    },
    impact: {
      command: '$ cat impact.log',
      title: 'Impact and approach',
      items: [
        {
          label: 'Reliable delivery',
          helper: 'I prioritize clear requirements, clean structure, and measurable outcomes without overclaiming.',
        },
        {
          label: 'Clear interfaces',
          helper: 'I design straightforward flows for real tasks, with clear readability and consistency.',
        },
        {
          label: 'Practical automation',
          helper: 'I add AI and automation when they reduce friction and keep operational control.',
        },
      ],
    },
    stack: {
      command: '$ cat stack-map.json',
      title: 'Current active stack',
      groups: [
        {
          key: 'frontend',
          title: 'Frontend',
          focus: 'Actively used in recent web projects.',
          items: ['React', 'Next.js', 'Tailwind CSS'],
        },
        {
          key: 'backend',
          title: 'Backend',
          focus: 'Foundation for APIs, business modules, and admin panels.',
          items: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
        },
        {
          key: 'ai',
          title: 'AI & Automation',
          focus: 'Targeted integrations to speed up workflows.',
          items: ['OpenAI API', 'Zapier'],
        },
        {
          key: 'tooling',
          title: 'Tooling',
          focus: 'Daily workflow for development, deployment, and basic hosting management.',
          items: ['Git / GitHub', 'Postman', 'Vercel', 'cPanel (cron jobs)'],
        },
      ],
    },
    projects: {
      command: '$ ls projects --featured',
      title: 'Projects',
      featuredLabel: 'Featured project',
      featured: {
        name: 'Simply Export App',
        description:
          'Web application focused on clear UX and streamlined data export workflows for daily operations.',
        result: 'A simpler export flow for repetitive operational tasks.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/simply-export-app.png',
        link: 'https://simply-export-app.vercel.app/',
      },
      sideLabel: 'Planning',
      sideProjects: [
        {
          name: 'Educational platform',
          description: 'Platform for courses and resources with a practical approach and clear student experience.',
          status: 'Planning',
        },
        {
          name: 'Laravel CRM templates',
          description: 'Ready-to-buy CRM templates to configure and customize with multiple styles from an admin panel.',
          status: 'Planning',
        },
        {
          name: 'My games and progress',
          description: 'Game tracking dashboard to showcase achievements from Steam and other platforms.',
          status: 'Planning',
        },
      ],
    },
    certs: {
      command: '$ cat certs.md',
      title: 'Certificates',
      viewLabel: 'View certificate',
      items: [
        {
          name: 'Software Analysis and Development Technologist',
          issuer: 'Educational Institution',
          image: '/certificado.png',
          link: 'https://drive.google.com/file/d/1ktGK2LzZKIluTG8J9LzySY5w63z_ikbQ/view?usp=drive_link',
        },
        {
          name: 'English BBE Languages',
          issuer: 'BBE Languages',
          image: '/certificado-ingles.png',
          link: 'https://drive.google.com/file/d/1uSPB5ggRYbXWf97ytvD9IsVhA8i8n8o7/view?usp=drive_link',
        },
      ],
    },
    contact: {
      command: '$ echo $CONTACT',
      title: 'Let us build something that creates real impact',
      description: 'Available for opportunities where I can contribute in product, UI, and automation.',
      cta: 'Send email',
    },
    footer: {
      command: '$ status --portfolio',
      slogan: 'Thoughtful code, intentional interfaces.',
      copyright: 'Kevttv',
    },
    themeToggle: {
      toDark: 'Switch to dark mode',
      toLight: 'Switch to light mode',
    },
  },
}

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function getLocaleContent(locale: Locale): PortfolioDictionary {
  return dictionary[locale]
}

export function normalizeLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'es'
}