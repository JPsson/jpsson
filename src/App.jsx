import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 *  JPSSON / EXE
 * - Floating geometric shapes in the background
 * - Gradient accents
 * - Smooth expand-on-click panels for projects
 * - Minimal but with more visual flair for a portfolio-style site
 */

const ITEMS = [
  {
    id: "tool",
    title: "YouTube → CD Maker",
    subtitle: "Convert & author",
    href: "https://github.com/JPsson/youtube-cd-maker",
    body: (
      <div className="space-y-4">
        <p>
          Build audio CDs from YouTube sources. Drag links, auto-normalize, and
          export a proper tracklist. This mirrors your repo’s utilitarian vibe
          with crisp, minimal UI.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
          href="https://github.com/JPsson/youtube-cd-maker"
          target="_blank" rel="noreferrer"
        >
          Open repository ↗
        </a>
      </div>
    ),
  },
  {
    id: "about",
    title: "About",
    subtitle: "Site & project notes",
    body: (
      <div className="space-y-4">
        <p>
          This portfolio-style site uses square/rectangular cards with subtle
          floating shapes in the background.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Say hello",
    body: (
      <div className="space-y-4">
        <p>
          Drop a line for collaboration, feedback, or opportunities.
        </p>
        <div className="flex gap-2">
          <a className="chip" href="#" onClick={(e)=>e.preventDefault()}>Email</a>
          <a className="chip" href="#" onClick={(e)=>e.preventDefault()}>GitHub</a>
          <a className="chip" href="#" onClick={(e)=>e.preventDefault()}>LinkedIn</a>
        </div>
      </div>
    ),
  },
];

function DecorativeBackground() {
  const shapes = [
    { size: 180, top: '12%', left: '15%', color: 'from-pink-400 to-purple-500', delay: 0 },
    { size: 220, top: '60%', left: '70%', color: 'from-blue-400 to-cyan-400', delay: 2 },
    { size: 140, top: '40%', left: '30%', color: 'from-emerald-400 to-lime-400', delay: 1 },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-xl bg-gradient-to-br ${s.color}`}
          style={{ width: s.size, height: s.size, top: s.top, left: s.left, opacity: 0.12 }}
          animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}
    </div>
  );
}

export default function PortfolioShowcase() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeItem = ITEMS.find((i) => i.id === activeId) || null;

  return (
    <div className="relative z-10 min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <DecorativeBackground />
      <style>{`
        :root{
          --bg: #f6f7f9;
          --panel: #ffffff;
          --text: #0f0f10;
          --muted: #6f6f78;
          --accent: #000000;
          --border: #e5e6eb;
        }
        h1, h2, h3, h4 {
          font-family: "Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .text-muted{ color: var(--muted); }
        .chip{ display:inline-flex; align-items:center; gap:.5rem; border:1px solid var(--border); padding:.375rem .75rem; border-radius:1rem; }
      `}</style>

      <header className="sticky top-0 z-30 backdrop-blur border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight hover:opacity-80">jp.dev</a>
          <nav className="flex items-center gap-3 text-xs text-muted uppercase tracking-wide">
            <a className="hover:text-[var(--text)] hover:underline underline-offset-4" href="https://github.com/JPsson/youtube-cd-maker" target="_blank" rel="noreferrer">repo ↗</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="py-14 sm:py-20">
          <div className="mx-auto text-center max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider uppercase">
              JPSSON / EXE
            </h1>
            <p className="mt-3 text-muted">
              showcase of projects & skills.
            </p>
          </div>

          <div className="mt-10 grid place-items-center gap-4 sm:gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {ITEMS.map((item) => (
              <motion.button
                key={item.id}
                layoutId={`card-${item.id}`}
                onClick={() => setActiveId(item.id)}
                style={{ aspectRatio: '2.2 / 1' }}
                className="relative w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-left shadow-lg transition-colors hover:bg-[var(--panel)]/80 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="text-muted text-sm">{item.subtitle}</p>
                </div>
                <div className="justify-self-end text-lg opacity-80">→</div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeItem && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            />
            <motion.div
              layoutId={`card-${activeItem.id}`}
              className="fixed inset-2 sm:inset-6 z-50 rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] px-4 sm:px-6 py-3">
                <div className="min-w-0">
                  <h3 className="truncate text-lg sm:text-xl font-medium leading-tight">{activeItem.title}</h3>
                  {activeItem.subtitle && <p className="truncate text-sm text-muted">{activeItem.subtitle}</p>}
                </div>
                <div className="flex items-center gap-2">
                  {activeItem.href && (
                    <a href={activeItem.href} target="_blank" rel="noreferrer" className="hidden sm:inline-flex rounded-xl border border-[var(--border)] px-3 py-2 text-sm hover:bg-[var(--bg)]/40">Open ↗</a>
                  )}
                  <button onClick={() => setActiveId(null)} aria-label="Close" className="rounded-lg border border-[var(--border)] p-2 hover:bg-[var(--bg)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20">✕</button>
                </div>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto px-4 sm:px-6 py-6">
                <ExpandedContent>{activeItem.body}</ExpandedContent>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} JP • Portfolio built with React + Framer Motion
      </footer>
    </div>
  );
}

function ExpandedContent({ children }) {
  return (
    <div className="prose max-w-none">
      {children}
    </div>
  );
}
