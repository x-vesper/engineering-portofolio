import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n/context'
import { LanguageToggle } from './LanguageToggle'
import styles from './Header.module.css'

/**
 * Compact header. The identity line stays in English regardless of the
 * selected language; the only control is the language switch. Since the site
 * is a single page, there is no navigation to collapse.
 */
export function Header() {
  const { content } = useLanguage()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.identity}>
          <span className={styles.prompt} aria-hidden="true">
            ./
          </span>
          <span>{content.identity}</span>
        </Link>

        <div className={styles.controls}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
