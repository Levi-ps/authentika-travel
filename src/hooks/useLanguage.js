// hooks/useLanguage.js
import { useState } from 'react'

/**
 * Provides multi-language support for FR / EN / AR.
 * Usage: const { lang, setLang, t } = useLanguage()
 *        t("Bonjour", "Hello", "مرحبا")
 */
export function useLanguage() {
  const [lang, setLang] = useState('fr')
  const t = (fr, en, ar) => lang === 'fr' ? fr : lang === 'en' ? en : ar
  return { lang, setLang, t }
}
