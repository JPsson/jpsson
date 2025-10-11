import { MINI_BUTTON_CLASS } from '../styles/miniButtonClass'

type Section = "projects" | "about" | "contact"

export function Header({ section, go }: { section: Section, go: (s: Section)=>void }){
  const activeClass = 'text-white after:opacity-100'
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <nav className="flex items-center gap-4">
          <button className={`${MINI_BUTTON_CLASS} ${section==="projects" ? activeClass : ''}`} onClick={() => go("projects")} aria-current={section==="projects"}>PROJECTS</button>
          <button className={`${MINI_BUTTON_CLASS} ${section==="about" ? activeClass : ''}`} onClick={() => go("about")} aria-current={section==="about"}>ABOUT</button>
          <button className={`${MINI_BUTTON_CLASS} ${section==="contact" ? activeClass : ''}`} onClick={() => go("contact")} aria-current={section==="contact"}>CONTACT</button>
        </nav>
        <div className="h-px w-8" aria-hidden="true" />
      </div>
    </header>
  )
}
