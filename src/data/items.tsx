import { Item } from '../types'

export const ITEMS: Item[] = [
  {
    id: "tool",
    title: {
      en: "youTube → CD-R",
      sv: "YouTube → CD-R",
    },
    subtitle: {
      en: "Convert & author",
      sv: "Konvertera och skapa",
    },
    href: "https://github.com/JPsson/youtube-cd-maker",
    body: {
      en: (
        <div className="stack">
          <p>
            Build audio CDs from YouTube sources. Drag links, auto-normalize, and
            export a proper tracklist in an interface tuned for minimal friction.
          </p>
          <ul className="muted-list">
            <li>Fast parsing of playlists</li>
            <li>Track order & cue export</li>
            <li>Normalization preview</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://yt2cd.se"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              YT2CD.SE ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/youtube-cd-maker"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              OPEN REPOSITORY ↗
            </a>
          </div>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Bygg ljud-CD-skivor från YouTube-källor. Dra in länkar, normalisera
            automatiskt och exportera en korrekt spårlista i ett gränssnitt utan
            onödig friktion.
          </p>
          <ul className="muted-list">
            <li>Snabb avläsning av spellistor</li>
            <li>Spårordning och cue-export</li>
            <li>Förhandsgranskning av normalisering</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://yt2cd.se"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              YT2CD.SE ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/youtube-cd-maker"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              ÖPPNA REPO ↗
            </a>
          </div>
        </div>
      ),
    },
  },
  {
    id: "exchange",
    title: {
      en: "exchange mail automation",
      sv: "Exchange-e-postautomation",
    },
    subtitle: {
      en: "PowerShell for EXO/On-Prem",
      sv: "PowerShell för EXO/On-Prem",
    },
    href: "https://github.com/JPsson/exchange-mail-automation",
    body: {
      en: (
        <div className="stack">
          <p>
            Automate Exchange: grant or revoke Send-As and FullAccess, stage
            mailbox rules, and audit changes with idempotent scripts.
          </p>
          <p>
            Includes guardrails for production tenants and verbose logging for
            incident reviews.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/exchange-mail-automation"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            OPEN REPOSITORY ↗
          </a>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Automatisera Exchange: ge eller återkalla Send-As och FullAccess,
            sätt upp regler och följ upp ändringar med idempotenta skript.
          </p>
          <p>
            Inbyggda skydd för produktionstenanter och detaljerad loggning för
            incidentgenomgångar.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/exchange-mail-automation"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ÖPPNA REPO ↗
          </a>
        </div>
      ),
    },
  },
  {
    id: "boardgame",
    title: {
      en: "shut the box boardgame",
      sv: "Shut the Box-brädspel",
    },
    subtitle: {
      en: ".NET desktop game",
      sv: ".NET-skrivbordsspel",
    },
    href: "https://github.com/JPsson/shut-the-box-boardgame",
    body: {
      en: (
        <div className="stack">
          <p>
            Classic dice game with a fast UI. Roll, flip tiles, track local scores,
            and enjoy simple pixel-perfect animations.
          </p>
          <p>
            Built for couch competitions with keyboard-first controls.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            OPEN REPOSITORY ↗
          </a>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Klassiskt tärningsspel med snabbt gränssnitt. Slå, fäll brickor,
            följ lokala poäng och få rena animationer.
          </p>
          <p>
            Skapat för soffturneringar med tangentbordsfokus.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ÖPPNA REPO ↗
          </a>
        </div>
      ),
    },
  },
  {
    id: "pos",
    title: {
      en: "bar point of sale system",
      sv: "Bar-kassasystem",
    },
    subtitle: {
      en: "Fast taps, simple flows",
      sv: "Snabba tryck, enkla flöden",
    },
    href: "https://github.com/JPsson/bar-point-of-sale-system",
    body: {
      en: (
        <div className="stack">
          <p>
            Lightweight POS for bars: tab-first workflow, keyboard shortcuts,
            quick items, and receipt exports.
          </p>
          <p>
            Operators get instant totals and nightly rollovers without training.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/bar-point-of-sale-system"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            OPEN REPOSITORY ↗
          </a>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Lätt POS för barer: flikar i fokus, tangentbordsgenvägar,
            snabbsälj och kvittoutskrifter.
          </p>
          <p>
            Personal får direktsaldon och kvällsavslut utan utbildning.
          </p>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/bar-point-of-sale-system"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ÖPPNA REPO ↗
          </a>
        </div>
      ),
    },
  },
  {
    id: "about",
    title: {
      en: "About",
      sv: "Om",
    },
    subtitle: {
      en: "Site & project notes",
      sv: "Anteckningar om sidan",
    },
    body: {
      en: (
        <div className="stack">
          <h4>Layout</h4>
          <p>
            Square cards, 1px borders, no shadows. Motion stays minimal: card to
            panel morphs and subtle fades only.
          </p>
          <h4>Typography</h4>
          <p>
            Monospace headings keep the interface crisp while body copy stays
            warm and readable.
          </p>
          <p>
            Spacing leans on equal gutters to keep the rhythm predictable.
          </p>
        </div>
      ),
      sv: (
        <div className="stack">
          <h4>Layout</h4>
          <p>
            Kvadratiska kort, 1 px-kanter och inga skuggor. Animationerna hålls
            återhållsamma: endast formförändringen och mjuka toningar.
          </p>
          <h4>Typografi</h4>
          <p>
            Monospace-rubriker ger skärpa medan brödtexten förblir varm och
            lättläst.
          </p>
          <p>
            Luftiga och jämna mellanrum håller rytmen förutsägbar.
          </p>
        </div>
      ),
    },
  },
  {
    id: "contact",
    title: {
      en: "Contact",
      sv: "Kontakt",
    },
    subtitle: {
      en: "Say hello",
      sv: "Säg hej",
    },
    body: {
      en: (
        <div className="stack">
          <h4>Reach out</h4>
          <p>Replace these with your real links.</p>
          <h4>Channels</h4>
          <p>Pick the platform that fits the message.</p>
          <div className="mini-btn-group">
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              EMAIL
            </a>
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              GITHUB
            </a>
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              LINKEDIN
            </a>
          </div>
        </div>
      ),
      sv: (
        <div className="stack">
          <h4>Hör av dig</h4>
          <p>Byt ut dessa mot dina riktiga länkar.</p>
          <h4>Kanaler</h4>
          <p>Välj plattform efter budskap.</p>
          <div className="mini-btn-group">
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              E-POST
            </a>
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              GITHUB
            </a>
            <a className="mini-btn" href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              LINKEDIN
            </a>
          </div>
        </div>
      ),
    },
  },
]
