import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArrowUpRight,
  Bot,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  Monitor,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  getLocaleContent,
  isSupportedLocale,
  supportedLocales,
  type Locale,
  type StackGroupKey,
} from '@/app/i18n/content'

const groupIcons: Record<StackGroupKey, LucideIcon> = {
  frontend: Monitor,
  backend: Database,
  ai: Bot,
  tooling: Wrench,
}

interface PageParams {
  locale: string
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { locale } = await params
  const normalizedLocale: Locale = isSupportedLocale(locale) ? locale : 'es'
  const content = getLocaleContent(normalizedLocale)

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  }
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { locale } = await params

  if (!isSupportedLocale(locale)) {
    notFound()
  }

  const content = getLocaleContent(locale)
  const featuredProject = content.projects.featured
  const upcomingLabel = locale === 'es' ? 'Proximamente' : 'Coming soon'

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <p className="terminal-line">$ portfolio --view bento --locale {locale}</p>
        <p className="hidden sm:block">{content.hero.location}</p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
        <article id="about" className="bento-card animate-rise md:col-span-2 xl:col-span-12">
          <div className="flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="terminal-line mb-3">{content.hero.command}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {content.hero.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-[var(--accent-main)]">
                {content.hero.role}{' '}
                <span className="text-base text-[var(--text-muted)]">{content.hero.age}</span>
              </p>
              <p className="mt-4 max-w-xl text-sm text-[var(--text-secondary)] sm:text-base">
                {content.hero.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {content.hero.badges.map((badge) => (
                  <span key={badge} className="chip">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex-shrink-0 lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-1 shadow-[var(--shadow-soft)]">
                <Image
                  src="/kevttv-avatar.jpg"
                  alt={content.hero.name}
                  width={176}
                  height={176}
                  sizes="(min-width: 640px) 176px, 160px"
                  priority
                  className="h-40 w-40 rounded-xl object-cover sm:h-44 sm:w-44"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 inline-flex h-4 w-4 animate-pulse rounded-full bg-[var(--accent-main)] ring-4 ring-[var(--bg-primary)]" />
            </div>
          </div>
        </article>

        <article className="bento-card animate-rise md:col-span-1 xl:col-span-6 stagger-1">
          <p className="terminal-line mb-3">{content.now.command}</p>
          <h2 className="text-xl font-semibold">{content.now.title}</h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)] sm:text-base">{content.now.description}</p>
          <p className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-muted)]">
            {content.now.availability}
          </p>
        </article>

        <article id="impact" className="bento-card animate-rise md:col-span-1 xl:col-span-6 stagger-2">
          <p className="terminal-line mb-3">{content.impact.command}</p>
          <h2 className="text-xl font-semibold">{content.impact.title}</h2>
          <div className="mt-4 grid gap-3">
            {content.impact.items.map((item) => (
              <div key={item.label} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3">
                <p className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{item.label}</p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.helper}</p>
              </div>
            ))}
          </div>
        </article>

      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

        <article id="stack" className="bento-card animate-rise md:col-span-2 stagger-1">
          <p className="terminal-line mb-3">{content.stack.command}</p>
          <h2 className="text-xl font-semibold">{content.stack.title}</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.stack.groups.map((group) => {
              const Icon = groupIcons[group.key]

              return (
                <div key={group.title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3">
                  <div className="mb-2 flex items-center gap-2 text-sm text-[var(--text-primary)]">
                    <Icon className="h-4 w-4 text-[var(--accent-main)]" />
                    <h3 className="font-medium">{group.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">{group.focus}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip chip-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <article id="certs" className="bento-card animate-rise md:col-span-1 stagger-2">
          <p className="terminal-line mb-3">{content.certs.command}</p>
          <h2 className="text-xl font-semibold">{content.certs.title}</h2>

          <div className="mt-4 space-y-3">
            {content.certs.items.map((cert) => (
              <div key={cert.name} className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={640}
                  height={360}
                  sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-2 p-3">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">{cert.name}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-alt)] hover:opacity-80"
                  >
                    <GraduationCap className="h-3 w-3" />
                    {content.certs.viewLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article id="projects" className="bento-card animate-rise md:col-span-1 stagger-3">
          <p className="terminal-line mb-3">{content.projects.command}</p>
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">{content.projects.title}</h2>
            <span className="chip">{content.projects.featuredLabel}</span>
          </div>

          <div className="grid gap-3">
            <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              <Image
                src={featuredProject.image}
                alt={featuredProject.name}
                width={1280}
                height={800}
                sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />

              <div className="space-y-4 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold sm:text-lg">{featuredProject.name}</h3>
                  <div className="flex items-center gap-2">
                    {featuredProject.github ? (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-button"
                        aria-label="GitHub"
                      >
                        <Layers3 className="h-4 w-4" />
                      </a>
                    ) : null}
                    {featuredProject.link ? (
                      <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-button"
                        aria-label="Open project"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)]">{featuredProject.description}</p>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="chip chip-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/40 px-3 py-2 text-sm text-[var(--text-muted)]">
                  {featuredProject.result}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {content.projects.sideLabel}
              </p>
              <div className="grid gap-3">
                {content.projects.sideProjects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-xl border border-dashed border-[var(--border-color)] bg-[var(--bg-secondary)]/65 p-4"
                  >
                    <div className="mb-2 flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{project.name}</h3>
                      <span className="chip chip-muted chip-status">{upcomingLabel}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article id="contact" className="bento-card animate-rise md:col-span-2 stagger-4">
          <p className="terminal-line mb-3">{content.contact.command}</p>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-balance">{content.contact.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
                {content.contact.description}
              </p>
            </div>

            <a
              href="mailto:kevttv29@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-main)] px-5 py-3 text-sm font-semibold text-[var(--btn-text)] transition-transform hover:translate-y-[-1px]"
            >
              <Mail className="h-4 w-4" />
              {content.contact.cta}
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}