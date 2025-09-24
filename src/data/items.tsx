import { Item } from '../types'

export const ITEMS: Item[] = [
  {
    id: "tool",
    title: "youTube → CD-R",
    subtitle: "Convert & author",
    href: "https://github.com/JPsson/youtube-cd-maker",
    body: (
      <div className="stack">
        <p>
          Build audio CDs from YouTube sources. Drag links, auto-normalize, and
          export a proper tracklist. This layout favors true minimalism.
        </p>
        <ul className="muted-list">
          <li>Fast parsing of playlists</li>
          <li>Track order & cue export</li>
          <li>Normalization preview</li>
        </ul>
        <a
          className="mini-btn"
          href="https://github.com/JPsson/youtube-cd-maker"
          target="_blank"
          rel="noreferrer"
        >
          OPEN REPOSITORY ↗
        </a>
      </div>
    ),
  },
  {
    id: "exchange",
    title: "exchange mail automation",
    subtitle: "PowerShell for EXO/On-Prem",
    href: "https://github.com/JPsson/exchange-mail-automation",
    body: (
      <div className="stack">
        <p>Automate Exchange: grant/revoke Send-As & FullAccess, set mailbox rules, and audit changes with idempotent scripts.</p>
        <a className="mini-btn" href="https://github.com/JPsson/exchange-mail-automation" target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>
      </div>
    ),
  },
  {
    id: "boardgame",
    title: "shut the box boardgame",
    subtitle: ".NET desktop game",
    href: "https://github.com/JPsson/shut-the-box-boardgame",
    body: (
      <div className="stack">
        <p>Classic dice game with fast UI. Roll, flip tiles, local scoring, simple animations.</p>
        <a className="mini-btn" href="https://github.com/JPsson/shut-the-box-boardgame" target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>
      </div>
    ),
  },
  {
    id: "pos",
    title: "bar point of sale system",
    subtitle: "Fast taps, simple flows",
    href: "https://github.com/JPsson/bar-point-of-sale-system",
    body: (
      <div className="stack">
        <p>Light POS for bars: tab-first workflow, keyboard shortcuts, quick items, receipt export.</p>
        <a className="mini-btn" href="https://github.com/JPsson/bar-point-of-sale-system" target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>
      </div>
    ),
  },
  {
    id: "about",
    title: "About",
    subtitle: "Site & project notes",
    body: (
      <div className="stack">
        <p>
          Square cards, 1px borders, no shadows. Motion is restrained and
          only used for the card→panel morph and fades.
        </p>
        <p>
          Fonts: heading uses a bold grotesk to keep the interface sharp
          while the body stays warm and readable.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Say hello",
    body: (
      <div className="stack">
        <p>Replace these with your real links.</p>
        <div className="mini-btn-group">
          <a className="mini-btn" href="#" onClick={(e) => e.preventDefault()}>
            EMAIL
          </a>
          <a className="mini-btn" href="#" onClick={(e) => e.preventDefault()}>
            GITHUB
          </a>
          <a className="mini-btn" href="#" onClick={(e) => e.preventDefault()}>
            LINKEDIN
          </a>
        </div>
      </div>
    ),
  },
]
