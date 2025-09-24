type Section = "projects" | "about" | "contact"

export function Header({ section, go }: { section: Section, go: (s: Section)=>void }){
  return (
    <header className="hd">
      <div className="container" style={{paddingTop: '0.75rem', paddingBottom: '0.75rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <nav className="flex items-center gap-2">
          <button className="mini-btn" onClick={() => go("projects")} aria-current={section==="projects"}>PROJECTS</button>
          <button className="mini-btn" onClick={() => go("about")} aria-current={section==="about"}>ABOUT</button>
          <button className="mini-btn" onClick={() => go("contact")} aria-current={section==="contact"}>CONTACT</button>
        </nav>
        <div />
      </div>
    </header>
  )
}
