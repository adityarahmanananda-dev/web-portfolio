export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  how: string;
  impact: string;
  stack: string[];
  shot: string;
  demo: string;
  github: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "banpem-go",
    title: "Banpem-GO",
    subtitle: "Government Grant Cash Book · Go",
    description:
      "Web application for administering government grant funds (e-BKU) at SMK Negeri 26 Jakarta — grant accounts, phased disbursement, invoices, and official financial reports.",
    how: "Go monolith with server-rendered templates, integer-based money arithmetic, and a custom tax engine (PPN/PPh, ROUND_HALF_EVEN).",
    impact:
      "Replaced manual spreadsheet bookkeeping, eliminated tax-calculation errors, and standardized auditor-ready reports — shipped as one containerized binary.",
    stack: ["Go", "PostgreSQL", "Docker", "net/http", "Excelize", "OOXML/PDF"],
    shot: "shots/banpem-go.png",
    demo: "mockups/banpem-go.html",
    github: "https://github.com/adityarahmanananda-dev/banpem-go",
    accent: "#0f766e",
  },
  {
    id: "bku-blud",
    title: "e-BKU BLUD",
    subtitle: "Provincial BLUD Cash Book · Python",
    description:
      "Digitizes monthly BLUD bookkeeping — invoices with automatic PPN/PPh, tax deposits, bank reconciliation, and official government-format forms.",
    how: "Flask + PostgreSQL (Supabase) with a tax engine ported 1:1 from Banpem-GO; generates Excel, Word, and PDF forms.",
    impact:
      "Automated recurring provincial reporting and removed manual, error-prone tax and reconciliation work.",
    stack: ["Python", "Flask", "PostgreSQL", "Supabase", "openpyxl", "python-docx"],
    shot: "shots/bku-blud.png",
    demo: "mockups/bku-blud.html",
    github: "https://github.com/adityarahmanananda-dev/bku-blud",
    accent: "#7c3aed",
  },
  {
    id: "ebku",
    title: "e-BKU",
    subtitle: "Electronic General Cash Book · Python",
    description:
      "Multi-program grant-fund management with automated ledger logic, Real vs. 100%-plan reporting, and Excel/PDF/Word exports.",
    how: "Flask + SQLite (13-table schema), banker's-rounding math, and invoice-driven ledger generation.",
    impact:
      "Gave finance operators a self-service cash-book tool and cut reporting turnaround.",
    stack: ["Python", "Flask", "SQLite", "openpyxl", "fpdf2", "python-docx"],
    shot: "shots/ebku.png",
    demo: "mockups/ebku.html",
    github: "https://github.com/adityarahmanananda-dev/e-bku",
    accent: "#0369a1",
  },
  {
    id: "devbashboard",
    title: "DevBashboard",
    subtitle: "Local Developer Environment Dashboard · Node.js",
    description:
      "Local dashboard that scans project folders, auto-detects stack & database, allocates collision-free ports, and starts/stops native + Docker apps with live logs.",
    how: "Node.js + Express + WebSocket; stack/DB detection and Docker Compose orchestration with process-group lifecycle control.",
    impact:
      "Runs a 13+ project portfolio from one screen — no port clashes or manual startup scripts.",
    stack: ["Node.js", "Express", "WebSocket", "Docker Compose", "JavaScript"],
    shot: "shots/devbashboard.png",
    demo: "mockups/devbashboard.html",
    github: "https://github.com/adityarahmanananda-dev/dev-bashboard",
    accent: "#d97706",
  },
  {
    id: "attendify",
    title: "Attendify",
    subtitle: "ASN Attendance Scraper & Rekap · Python",
    description:
      "Scrapes and aggregates attendance data from BKD DKI Jakarta's e-attendance system into recaps, with an absence-clarification workflow.",
    how: "Flask + Playwright drives a real Chrome session to capture login; parses HTML into SQLite and exports Excel/PDF.",
    impact:
      "Replaced manual Excel consolidation and made attendance recap repeatable and auditable.",
    stack: ["Python", "Flask", "Playwright", "SQLite", "openpyxl", "ReportLab"],
    shot: "shots/attendify.png",
    demo: "mockups/attendify.html",
    github: "https://github.com/adityarahmanananda-dev/attendify",
    accent: "#be185d",
  },
  {
    id: "pdf-studio",
    title: "PDF Studio",
    subtitle: "Local PDF & Image Processing · Python",
    description:
      "Local web app to rotate, extract, compress, merge PDFs, and convert images — everything processed on-device.",
    how: "Flask with pikepdf/Pillow/img2pdf, Ghostscript and Poppler backends; drag-and-drop UX and ZIP downloads.",
    impact: "Consolidated six CLI scripts into one privacy-preserving tool.",
    stack: ["Python", "Flask", "pikepdf", "Pillow", "Ghostscript", "Poppler"],
    shot: "shots/pdf-studio.png",
    demo: "mockups/pdf-studio.html",
    github: "https://github.com/adityarahmanananda-dev/pdf-web-tool",
    accent: "#b45309",
  },
  {
    id: "ebook-renamer",
    title: "Ebook Renamer",
    subtitle: "Desktop Metadata & Renaming · Electron",
    description:
      "Cross-platform desktop app that scans EPUB/PDF folders and batch-renames files using title & author metadata from book APIs.",
    how: "Electron + React + Express; extracts metadata and matches via Open Library and Google Books.",
    impact: "Automated metadata cleanup and batch renaming of large ebook libraries.",
    stack: ["Electron", "React", "Vite", "Express", "Open Library", "Google Books"],
    shot: "shots/ebook-renamer.png",
    demo: "mockups/ebook-renamer.html",
    github: "https://github.com/adityarahmanananda-dev/ebook-renamer-electron",
    accent: "#4338ca",
  },
  {
    id: "quattro-note",
    title: "4Notes",
    subtitle: "Multi-Method Study Notebook · JavaScript",
    description:
      "Zero-dependency study notebook that combines Cornell, QEC, Mindmap, and Outline methods inside a single note.",
    how: "Vanilla JavaScript with localStorage autosave and full-state JSON export/import.",
    impact: "Powers an 18-month self-directed computer-science study roadmap.",
    stack: ["JavaScript", "HTML5", "CSS3", "localStorage"],
    shot: "shots/quattro-note.png",
    demo: "mockups/quattro-note.html",
    github: "https://github.com/adityarahmanananda-dev/quattro-note",
    accent: "#059669",
  },
];