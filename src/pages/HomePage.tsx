import type { LucideIcon } from 'lucide-react'
import { Activity, Boxes, Github, Mail, Network } from 'lucide-react'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { TerminalSnippet } from '@/components/TerminalSnippet'
import { FisherAnimation } from '@/components/FisherAnimation'
import { useContent } from '@/i18n/context'
import styles from './HomePage.module.css'

/** Maps a section id to its Lucide icon. */
const sectionIcons: Record<string, LucideIcon> = {
  'core-ops': Activity,
  'platform-lab': Boxes,
  infra: Network,
}

export function HomePage() {
  const content = useContent()
  const { ui } = content

  const github = content.contact.find((link) => link.label === 'GitHub')
  const email = content.contact.find((link) => link.label === 'Email')

  return (
    <Page>
      <FisherAnimation />
      <section className={styles.hero} aria-labelledby="hero-heading">
        <p className="mono-label">{content.identity}</p>
        <h1 id="hero-heading" className={styles.headline}>
          {content.hero.headline}
        </h1>
        <p className={styles.lede}>{content.hero.lede}</p>
        <ul className={styles.focus} aria-label={ui.focusAreas}>
          {content.focusAreas.map((area) => (
            <li key={area} className="pill">
              {area}
            </li>
          ))}
        </ul>
        <TerminalSnippet />
        {github || email ? (
          <div className={styles.icons}>
            {github ? (
              <a
                className={styles.iconLink}
                href={github.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={github.label}
              >
                <Github aria-hidden="true" />
              </a>
            ) : null}
            {email ? (
              <a className={styles.iconLink} href={email.href} aria-label={email.label}>
                <Mail aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
      </section>

      {content.sections.map((section) => {
        const Icon = sectionIcons[section.id]
        return (
          <Section
            key={section.id}
            id={section.id}
            label={section.label}
            icon={Icon ? <Icon aria-hidden="true" /> : undefined}
            title={section.title}
          >
            <ul className={styles.items}>
              {section.items.map((item) => (
                <li
                  key={item.text}
                  className={item.pill ? styles.itemBadge : styles.item}
                >
                  {item.pill ? <span className="pill">{item.text}</span> : item.text}
                </li>
              ))}
            </ul>
          </Section>
        )
      })}

      <Section id="contact" label={ui.contactEyebrow} title={ui.contactTitle}>
        {content.contact.length > 0 ? (
          <ul className={styles.contact}>
            {content.contact.map((link) => (
              <li key={link.href} className={styles.contactItem}>
                <a
                  href={link.href}
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.contactFallback}>{ui.contactFallback}</p>
        )}
      </Section>
    </Page>
  )
}
