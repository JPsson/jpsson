import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { ITEMS } from './data/items'
import type { CardId, Language } from './types'
import { PanelCard } from './components/PanelCard'

const SCANDINAVIAN_PREFIXES = ['sv', 'da', 'nb', 'nn', 'no'] as const

const detectPreferredLanguage = (): Language => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'sv'
  }

  const navigatorLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language]

  const normalized = navigatorLanguages.map(code => (code || '').toLowerCase())

  const hasScandinavianLocale = normalized.some(code =>
    SCANDINAVIAN_PREFIXES.some(prefix => code.startsWith(prefix))
  )

  return hasScandinavianLocale ? 'sv' : 'en'
}

type Section = "projects" | "about" | "contact"

export default function App(){
  const [activeId, setActiveId] = useState<CardId | null>(null)
  const [language, setLanguage] = useState<Language>(() => detectPreferredLanguage())

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'sv' : 'en')

  const TEXT = {
    header: {
      projects: {
        en: 'PROJECTS',
        sv: 'PROJEKT',
      },
      about: {
        en: 'ABOUT',
        sv: 'OM',
      },
      contact: {
        en: 'CONTACT',
        sv: 'KONTAKT',
      },
    },
    heroTitle: {
      en: 'JPSSON / EXE',
      sv: 'JPSSON / EXE',
    },
    heroSubtitle: {
      en: 'Square UI. 1px borders. No noise.',
      sv: 'Kvadratisk UI. 1 px-kanter. Inget brus.',
    },
    footer: {
      en: (year: number) => `© ${year} JP • React + Framer Motion • Minimal mode`,
      sv: (year: number) => `© ${year} JP • React + Framer Motion • Minimalt läge`,
    },
  }

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveId(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const activeItem = useMemo(() => ITEMS.find(i => i.id === activeId) || null, [activeId])

  // map of card refs to detect outside clicks without an overlay
  const cardRefs = useRef<Record<CardId, HTMLElement | null>>({
    tool: null, exchange: null, boardgame: null, pos: null, about: null, contact: null,
  })

  // Simple hash routing
  const getSectionFromHash = (): Section => {
    const h = (window.location.hash || "#projects").replace("#", "")
    return (h === "about" || h === "contact") ? (h as Section) : "projects"
  }
  const [section, setSection] = useState<Section>(getSectionFromHash())
  useEffect(() => {
    const onHash = () => setSection(getSectionFromHash())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])
  const go = (s: Section) => { if (window.location.hash !== `#${s}`) window.location.hash = `#${s}`; else setSection(s) }

  // Only show items for the current section
  const VISIBLE_ITEMS = useMemo(() => {
    if (section === "projects") return ITEMS.filter(i => ["tool","exchange","boardgame","pos"].includes(i.id))
    if (section === "about") return ITEMS.filter(i => i.id === "about")
    return ITEMS.filter(i => i.id === "contact")
  }, [section])

  // Outside click close (but clicks on active card do not close)
  const onRootClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!activeId) return
    const node = cardRefs.current[activeId!]
    if (node && !node.contains(e.target as Node)) setActiveId(null)
  }

  const registerRef = (id: CardId, el: HTMLElement | null) => { cardRefs.current[id] = el }

  return (
    <div className="app-shell" onClickCapture={onRootClickCapture}>
      <Header
        section={section}
        go={go}
        labels={{
          projects: TEXT.header.projects[language],
          about: TEXT.header.about[language],
          contact: TEXT.header.contact[language],
        }}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      <main className="container main-content">
        <section className="hero">
          <h1>{TEXT.heroTitle[language]}</h1>
          <p className="text-muted">{TEXT.heroSubtitle[language]}</p>
        </section>

        <section className="cards-section">
          <AnimatePresence>
            {activeId && (
              <motion.div
                key="cards-blur"
                className="cards-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <motion.div
            layout
            className="cards"
          >
            {VISIBLE_ITEMS.map(item => {
              const isActive = activeId === item.id
              return (
                <PanelCard
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  language={language}
                  setActiveId={setActiveId}
                  registerRef={registerRef}
                />
              )
            })}
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {activeId && (
          <motion.div
            key="close-catch"
            className="close-catcher"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>

      <footer className="site-footer">
        <div className="container">
          {TEXT.footer[language](new Date().getFullYear())}
        </div>
      </footer>
    </div>
  )
}
