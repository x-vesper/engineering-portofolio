import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLanguage, getContent, isLanguage, type Language } from '@/content'
import { LanguageContext } from './context'

const STORAGE_KEY = 'vesper-language'

/**
 * Picks the initial language: a previously chosen one if present, otherwise the
 * browser preference, otherwise English. Kept deliberately simple — no URL
 * changes, so links always work the same on GitHub Pages.
 */
function readInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) {
    return stored
  }

  return window.navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = useCallback((next: Language) => {
    setLanguage(next)
  }, [])

  const content = useMemo(() => getContent(language), [language])

  const value = useMemo(
    () => ({ language, setLanguage: handleSetLanguage, content }),
    [language, handleSetLanguage, content],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
