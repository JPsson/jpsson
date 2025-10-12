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
          En RPA-verktyg byggt med Electron som loggar in i Microsoft Exchange Admin Center och automatiserar processen att lägga till funktionsbrevlådor till användare — utan API-åtkomst eller registrerad Azure-app.
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
    en: "shut the Box Boardgame",
    sv: "shut the Box Boardgame",
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
        title: "Design Patterns",
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
        title: "Design Patterns",
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
    en: "React + Vite portfolio with minimal UI design",
    sv: "React + Vite portfölj med minimal gränssnittsdesign",
  },
  href: "https://github.com/JPsson/jpsson",
  body: {
    en: (
      <div className="stack">
        <p>
          JPsson is a Portfolio website with the purpose of showcasing my ongoing personal projects as well as finished ones. The website illustrates my personal likings for clean visuals, responsiveness and minimalism design style.
        </p>
        <ul className="muted-list">
          <li>React app bootstrapped with Vite for instant dev and fast builds</li>
          <li>Framer Motion interactions and smooth transitions</li>
          <li>Responsive, fast and minimal</li>
        </ul>
        <div className="mini-btn-group">
          <a className="mini-btn" href="https://github.com/JPsson/jpsson" target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
        </div>
      </div>
    ),
    sv: (
      <div className="stack">
        <p>
          JPsson är en webbsida vars syfte är att visa upp min portfölj med både pågående och färdiga personliga projekt. Webbplatsen speglar min personliga smak för avslappnade visuella intryck, responsivitet och minimalistisk design. 
        </p>
        <ul className="muted-list">
          <li>React-app med Vite för snabb utvecklingsmöjligheter</li>
          <li>Framer Motion för interaktioner och mjuka animationer</li>
          <li>Responsiv, snabb och minimalistisk</li>
        </ul>
        <div className="mini-btn-group">
          <a className="mini-btn" href="https://github.com/JPsson/jpsson" target="_blank" rel="noreferrer">
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
        body: "React with Vite and Framer Motion for animations. Deployed on a lightweight Node server behind Nginx.",
      },
      {
        title: "Design Goals",
        body: "Minimal visuals and quick scanability. Emphasis on intuitivness, clear typography, spacing and uniformity.",
      },
    ],
    sv: [
      {
        title: "Stack",
        body: "React med Vite samt Framer Motion för animationer. Driftsatt på en Node bakom Nginx.",
      },
      {
        title: "Designmål",
        body: "Minimalistiskt, lätt att få överblick och intuitiva animationer. Fokus på tydlig typografi, luft och enhetlighet.",
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
      en: "About me",
      sv: "Om mig",
    },
    body: {
      en: (
        <div className="stack">
          <p>My name is Jakob Pettersson and I live in Uppsala. I hold a Bachelor’s degree in Information Systems: Systems Development, as well as several years of experience in the IT industry as an IT/CX Technician, Application Consultant and Quality Assurance within Game testing.</p>
          <p>If you’d like to get in touch, feel free to send me an email or reach out on LinkedIn!</p>
          <div className="mini-btn-group">
            <a className="mini-btn" href="mailto:jakob.pettersson01@gmail.com">
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
              href="https://www.linkedin.com/in/jakob-pettersson-041b61183/"
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
          <p>Jakob Pettersson heter jag och är bosatt i Uppsala, har en kandidatexamen i Systemvetenskap: Systemutveckling. Samt flerårig efrarenhet inom IT-branschen som IT/CX-Tekniker, Spel- och Systemtestare samt Applikationskonsult.  </p>
          <p>Vill du komma i kontakt med mig, skicka då gärna ett mail eller skriv på LinkedIn!</p>
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
    },
    infoCards: {
      en: [
        {
          title: "Timezone",
          body: "Based in Uppsala, CET (UTC+1) with typical availability 08–17.",
        },
        {
          title: "Response",
          body: "Expect replies within a day; faster on email.",
        },
      ],
      sv: [
        {
          title: "Tidszon",
          body: "Uppsala, CET (UTC+1) med tillgänglighet primärt 08–17.",
        },
        {
          title: "Svarstid",
          body: "Räkna med svar inom ett dygn; snabbast via mail.",
        },
      ],
    },
  },
]
