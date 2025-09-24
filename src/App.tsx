import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { ITEMS } from './data/items'
import type { CardId } from './types'
import { PanelCard } from './components/PanelCard'

type Section = "projects" | "about" | "contact"

export default function App(){
  const [activeId, setActiveId] = useState<CardId | null>(null)

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
    <div className="relative min-h-screen" onClickCapture={onRootClickCapture}>
      <Header section={section} go={go} />

      <main className="container">
        <section className="center" style={{paddingTop:'3.5rem', paddingBottom:'4rem'}}>
          <h1 className="text-3xl sm:text-4xl">JPSSON / EXE</h1>
          <p className="mt-3 text-muted">Square UI. 1px borders. No noise.</p>
        </section>

        <section style={{paddingBottom:'4rem'}}>
          <motion.div
            layout
            className={`cards grid gap-3 sm:gap-4 mx-auto justify-center grid-cols-1 sm:grid-cols-[560px]`}
            data-active={activeId ? 'true' : 'false'}
          >
            {VISIBLE_ITEMS.map(item => {
              const isActive = activeId === item.id
              return (
                <PanelCard key={item.id} item={item} isActive={isActive} setActiveId={setActiveId} registerRef={registerRef} />
              )
            })}
          </motion.div>
        </section>
      </main>

      <footer className="container" style={{padding:'2.5rem 1rem', textAlign:'center', fontSize:'12px', color:'var(--muted)', borderTop:'1px solid var(--border)'}}>
        © {new Date().getFullYear()} JP • React + Framer Motion • Minimal mode
      </footer>
    </div>
  )
}
