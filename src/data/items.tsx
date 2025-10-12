import { Item } from '../types'

export const ITEMS: Item[] = [
  {
    id: "tool",
    title: {
      en: "youTube → CD-R",
      sv: "youTube → CD-R",
    },
    subtitle: {
      en: "Convert YT videos to MP3/WAV and burn to CD-R",
      sv: "Konvertera YT-klipp till MP3/WAV och bränn till CD-R",
    },
    href: "https://github.com/JPsson/youtube-cd-maker",
    body: {
      en: (
        <div className="stack">
          <p>
            Build playlists from Youtube videos that can be exported to MP3/WAV in an interface tuned for CD-burning with minimal friction.
          </p>
          <ul className="muted-list">
            <li>Smart pre-loading and fast parsing of video metadata</li>
            <li>Swiftly change playlist track order & export</li>
            <li>Automatically chooses best audio format and bitrate</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://yt2cd.se"
              target="_blank"
              rel="noreferrer"
            >
              YT2CD.SE ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/youtube-cd-maker"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Skapa spellistor från Youtube-klipp som exporteras till MP3/WAV i ett minimalt och intuitivt gränsnitt anpassat för CD-bränning.
          </p>
          <ul className="muted-list">
            <li>Smart pre-loading och snabb inläsning av videometadata</li>
            <li>Enkel justering av spellista samt exportering</li>
            <li>Automatiskt val av bästa möjliga ljudformat och bitrate</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://yt2cd.se"
              target="_blank"
              rel="noreferrer"
            >
              YT2CD.SE ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/youtube-cd-maker"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      ),
    },
    infoCards: {
      en: [
        {
          title: "Stack",
          body: "Built with Node.js + Express backend. YT-dlp for fetching metadata and FFmpeg for transcoding.",
        },
        {
          title: "Why to CD?",
          body: "Y2K is back in fashion! Burning CDs is fun, but the friction of obtaining audio-files is a headache. YT2CD simplifies that process immensively.",
        },
      ],
      sv: [
        {
          title: "Stack",
          body: "Node.js + Express backend. YT-dlp för fetchning av metadata samt FFmpeg för transkodning.",
        },
        {
          title: "Varför till CD?",
          body: "90-tal och Y2K är trendigt, och att bränna CDs är kul! Att ladda ner musikfiler på nätet idag är ofta krångligt, YT2CD gör det smidigt!",
        },
      ],
    },
  },
  {
  id: "exchange",
  title: {
    en: "m365 exchange admin automator (RPA)",
    sv: "m365 exchange admin automator (RPA)",
  },
  subtitle: {
    en: "RPA tool for adding shared mailboxes to users via EAC, no Graph/Azure app needed",
    sv: "RPA-verktyg för att lägga till delade brevlådor till användare via EAC, utan behov av Graph/Azure-app",
  },
  href: "https://github.com/JPsson/exchange-mail-automation",
  body: {
    en: (
      <div className="stack">
        <p>
          A lightweight Electron-based RPA tool that signs in to the Microsoft Exchange Admin Center and automates adding shared mailboxes to users, bypassing the need for API access or registering an Azure application.
        </p>
        <ul className="muted-list">
          <li>Drives the EAC UI with Playwright (Chromium) for reliable, scriptable clicks</li>
          <li>No Graph permissions or Azure app registration required</li>
        </ul>
        <div className="mini-btn-group">
          <a
            className="mini-btn"
            href="https://github.com/JPsson/exchange-mail-automation"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

        </div>
      </div>
    ),
    sv: (
      <div className="stack">
        <p>
          En lättviktig RPA-verktyg byggt med Electron som loggar in i Microsoft Exchange Admin Center och automatiserar att lägga till delade brevlådor till användare — utan API-åtkomst eller registrerad Azure-app.
        </p>
        <ul className="muted-list">
          <li>Styr EAC-gränssnittet med Playwright (Chromium) för tillförlitlig automation</li>
          <li>Inga Graph-behörigheter eller Azure-app krävs</li>
        </ul>
        <div className="mini-btn-group">
          <a
            className="mini-btn"
            href="https://github.com/JPsson/exchange-mail-automation"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
        </div>
      </div>
    ),
  },
  infoCards: {
    en: [
      {
        title: "Stack",
        body:
          "Electron shell with a vanilla HTML/CSS/JavaScript renderer. Playwright drives the Exchange Admin Center. Node.js/npm for tooling.",
      },
      {
        title: "Why UI-automation?",
        body:
          "Great when you can’t (or don’t want to) grant Graph permissions or create an Azure app. It uses your Exchange admin credentials and the existing EAC workflow.",
      },
      {
        title: "Prerequisites",
        body: "Node.js ≥ 16, npm, and Exchange admin credentials to sign in to EAC.",
      },
    ],
    sv: [
      {
        title: "Stack",
        body:
          "Electron-skal med enkel HTML/CSS/JavaScript. Playwright styr Exchange Admin Center. Använder Node.js/npm för verktygshantering.",
      },
      {
        title: "Varför UI-automation?",
        body:
          "Perfekt när Graph-behörigheter/Azure-app inte är ett alternativ. Den använder dina Exchange-adminkontouppgifter och flödesprocesser likt manuella användare.",
      },
      {
        title: "Förkrav",
        body: "Node.js ≥ 16, npm och Exchange-adminkonto för inloggning i EAC.",
      },
    ],
  },
},
  {
  id: "boardgame",
  title: {
    en: "Shut the Box Boardgame",
    sv: "Shut the Box Boardgame",
  },
  subtitle: {
    en: "Console-based C# board game with strong OOP architecture",
    sv: "Konsolbaserat C#-spel med stark OOP-arkitektur",
  },
  href: "https://github.com/JPsson/shut-the-box-boardgame",
  body: {
    en: (
      <div className="stack">
        <p>
          A console version of the classic Shut the Box, built in C# to demonstrate clean object-oriented design and modular architecture. Created as a university project focusing on flexibility, maintainability, and clear logic.
        </p>
        <ul className="muted-list">
          <li>Core domain model for tiles, dice, boxes, and scoring</li>
          <li>Uses 18 different design patterns such as Generics, Lambdas and Dependency Injection</li>
          <li>Dynamic feedback and player personalities for immersion</li>
        </ul>
        <div className="mini-btn-group">
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame#readme"
            target="_blank"
            rel="noreferrer"
          >
            README ↗
          </a>
        </div>
      </div>
    ),
    sv: (
      <div className="stack">
        <p>
          En konsolversion av klassikern Shut the Box, byggd i C# för att demonstrera tydlig objektorienterad design och modulär arkitektur. Skapad som universitetsprojekt med fokus på flexibilitet, struktur och logik.
        </p>
        <ul className="muted-list">
          <li>Kärnmodell för brickor, tärningar, boxar och poäng</li>
          <li>Använder 18 olika design patterns, såsom: Generics, Lambdas och Dependency Injection</li>
          <li>Dynamisk feedback och spelarpersonligheter för inlevelse</li>
        </ul>
        <div className="mini-btn-group">
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            className="mini-btn"
            href="https://github.com/JPsson/shut-the-box-boardgame#readme"
            target="_blank"
            rel="noreferrer"
          >
            README ↗
          </a>
        </div>
      </div>
    ),
  },
  infoCards: {
    en: [
      {
        title: "Stack",
        body: "C# .NET console application. Separation between domain, services, and UI layers. Interfaces for dice, scoring, and display logic for testing and extension.",
      },
      {
        title: "Patterns",
        body: "Implements Dependency Injection, Strategy, Observer, Generics, Collections, Lambdas, and LINQ with clear documentation and modular design.",
      },
      {
        title: "Scope",
        body: "University course project focused on applying OOP principles and design patterns. Gameplay centers around clarity, modularity, and maintainable code structure.",
      },
    ],
    sv: [
      {
        title: "Stack",
        body: "C# .NET konsolapplikation. Uppdelning mellan domän, tjänster och UI-lager. Interfaces för tärning, poäng och visningslogik för enkel testning och utbyggnad.",
      },
      {
        title: "Mönster",
        body: "Implementerar Dependency Injection, Strategy, Observer, Generics, Collections, Lambdas och LINQ med tydlig dokumentation och modulär design.",
      },
      {
        title: "Omfång",
        body: "Universitetsprojekt med fokus på objektorienterade principer och designmönster. Projektet betonar tydlig logik, struktur och återanvändbar samt hanterbar kod.",
      },
    ],
  },
},
  {
    id: "pos",
    title: {
      en: "bar Point of Sale System",
      sv: "bar Point of Sale System",
    },
    subtitle: {
      en: "Tkinter-based bar ordering and management system",
      sv: "Tkinter-baserat system för barbeställning och administration",
    },
    href: "https://github.com/JPsson/bar-point-of-sale-system",
    body: {
      en: (
        <div className="stack">
          <p>
            A desktop POS application built with Python and Tkinter using an MVC architecture and JSON data storage. Designed for quick bar orders, stock management, and simple admin workflows.
          </p>
          <ul className="muted-list">
            <li>Menu, cart, and order flows with undo and redo</li>
            <li>Reservations, VIP view, and multilingual interface</li>
            <li>Stock management and staff admin panel</li>
            <li>Drag and drop interactions and responsive layout</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://github.com/JPsson/bar-point-of-sale-system"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/bar-point-of-sale-system#readme"
              target="_blank"
              rel="noreferrer"
            >
              README ↗
            </a>
          </div>
        </div>
      ),
      sv: (
        <div className="stack">
          <p>
            Ett skrivbordsbaserat POS-system byggt i Python och Tkinter med MVC-struktur och JSON-lagring. Utformat för snabba barbeställningar, lagerhantering och enkel administration.
          </p>
          <ul className="muted-list">
            <li>Meny, kundvagn och orderflöden med ångra och gör om</li>
            <li>Bokningar, VIP-vy och flerspråkigt gränssnitt</li>
            <li>Lagerhantering och personaladministration</li>
            <li>Drag and drop-interaktioner och responsiv layout</li>
          </ul>
          <div className="mini-btn-group">
            <a
              className="mini-btn"
              href="https://github.com/JPsson/bar-point-of-sale-system"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson/bar-point-of-sale-system#readme"
              target="_blank"
              rel="noreferrer"
            >
              README ↗
            </a>
          </div>
        </div>
      ),
    },
    infoCards: {
      en: [
        {
          title: "Stack",
          body: "Python 3 with Tkinter UI. MVC separation between models, views, and controller. JSON used for data storage. Pillow for image handling.",
        },
        {
          title: "Scope",
          body: "Handles bar orders, reservations, and simple back-office tasks like stock and staff management. Built as a university project, easily run with python main.py.",
        },
      ],
      sv: [
        {
          title: "Stack",
          body: "Python 3 med Tkinter UI. Tydlig MVC-uppdelning mellan models, views och controller. JSON används för datalagring. Pillow används för bilder.",
        },
        {
          title: "Omfång",
          body: "Hanterar barbeställningar, bokningar och enklare backoffice-funktioner som lager och personalhantering. Byggt som universitetsprojekt och körs enkelt med python main.py.",
        },
      ],
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
    infoCards: {
      en: [
        {
          title: "Inspiration",
          body: "Guided by brutalist web references from the early 2000s.",
        },
        {
          title: "Credits",
          body: "Set in Press Start 2P + system fonts; hosted on a static Vite build.",
        },
      ],
      sv: [
        {
          title: "Inspiration",
          body: "Inspirerad av brutalistiska webbplatser från tidigt 2000-tal.",
        },
        {
          title: "Krediter",
          body: "Använder Press Start 2P och systemtypsnitt; hostas som statiskt Vite-bygge.",
        },
      ],
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
            <a className="mini-btn" href="mailto:hello@example.com">
              EMAIL
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              className="mini-btn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
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
            <a className="mini-btn" href="mailto:hello@example.com">
              E-POST
            </a>
            <a
              className="mini-btn"
              href="https://github.com/JPsson"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              className="mini-btn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      ),
    },
    infoCards: {
      en: [
        {
          title: "Timezone",
          body: "Based in CET (UTC+1) with typical availability 09–18.",
        },
        {
          title: "Response",
          body: "Expect replies within a day; faster on email.",
        },
      ],
      sv: [
        {
          title: "Tidszon",
          body: "Bas i CET (UTC+1) med tillgänglighet 09–18.",
        },
        {
          title: "Svarstid",
          body: "Räkna med svar inom ett dygn; snabbast via e-post.",
        },
      ],
    },
  },
]
