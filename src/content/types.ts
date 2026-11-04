/**
 * Shared content types.
 *
 * The site is a single page. Content is authored per language (see
 * `src/content/en.ts` and `src/content/id.ts`). Both files must satisfy
 * `ContentDictionary`, so a missing translation becomes a type error rather
 * than an empty string at runtime.
 *
 * The header identity and footer are intentionally English-only (the same
 * strings are used in both dictionaries).
 */

export type Language = 'en' | 'id'

export interface ContactLink {
  label: string
  href: string
}

/** One bullet inside a capability section. `pill` renders it as a badge. */
export interface SectionItem {
  text: string
  pill?: boolean
}

/** A capability block: a pill label, a heading, and a list of points. */
export interface ContentSection {
  id: string
  label: string
  title: string
  items: SectionItem[]
}

/** Labels and short copy used by the UI chrome rather than by content data. */
export interface UiStrings {
  skipToContent: string
  languageGroupLabel: string
  focusAreas: string
  contactEyebrow: string
  contactTitle: string
  contactFallback: string
  currentlyExploring: string
  notFound: { code: string; title: string; body: string; link: string }
}

/** A complete set of translated content for one language, minus contact links. */
export interface ContentDictionary {
  siteName: string
  identity: string
  hero: { headline: string; lede: string }
  focusAreas: string[]
  sections: ContentSection[]
  ui: UiStrings
}

/** Content plus the build-time contact links, which are language-independent. */
export interface SiteContent extends ContentDictionary {
  contact: ContactLink[]
}
