type Section = "projects" | "about" | "contact"

export function Header({ section, go }: { section: Section, go: (s: Section)=>void }){
  return (
    <header className="hd">
      <div className="container header-inner">
        <nav className="header-nav">
          <button className="mini-btn" onClick={() => go("projects")} aria-current={section==="projects"}>PROJECTS</button>
          <button className="mini-btn" onClick={() => go("about")} aria-current={section==="about"}>ABOUT</button>
          <button className="mini-btn" onClick={() => go("contact")} aria-current={section==="contact"}>CONTACT</button>
        </nav>
        <div className="header-actions" aria-hidden="true">
          <span />
          <span />
        </div>
      </div>
    </header>
  )
}
