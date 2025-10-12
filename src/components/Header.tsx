import type { Language } from '../types'

type Section = "projects" | "about" | "contact"

export function Header({
  section,
  go,
  labels,
  language,
  onToggleLanguage,
}: {
  section: Section,
  go: (s: Section)=>void,
  labels: Record<Section, string>,
  language: Language,
  onToggleLanguage: ()=>void,
}){
  return (
    <header className="hd">
      <div className="container header-inner">
        <nav className="header-nav">
          <button
            className="mini-btn"
            onClick={() => go("projects")}
            aria-current={section==="projects"}
          >
            {labels.projects}
          </button>
          <button
            className="mini-btn"
            onClick={() => go("about")}
            aria-current={section==="about"}
          >
            {labels.about}
          </button>
          <button
            className="mini-btn"
            onClick={() => go("contact")}
            aria-current={section==="contact"}
          >
            {labels.contact}
          </button>
        </nav>
        <button
          type="button"
          className="mini-btn mini-btn--compact lang-toggle"
          onClick={onToggleLanguage}
          aria-label={`Switch language. Current: ${language.toUpperCase()}`}
        >
          <span className="lang-toggle__primary">{language === "sv" ? "SV" : "EN"}</span>
          <span aria-hidden className="lang-toggle__divider">/</span>
          <span>{language === "sv" ? "EN" : "SV"}</span>
        </button>
      </div>
    </header>
  )
}
