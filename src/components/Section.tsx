import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  label?: string
  icon?: ReactNode
  title: string
  description?: string
  children: ReactNode
}

/**
 * A titled content section. The label renders as a pill — a small,
 * monospace marker that gives the page an editorial/terminal rhythm without
 * decorative noise. An optional icon sits inside the pill.
 */
export function Section({ id, label, icon, title, description, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        {label ? (
          <p className="pill">
            {icon}
            {label}
          </p>
        ) : null}
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
