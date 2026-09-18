import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

interface Props {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "var(--card)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          paddingTop: 14,
          paddingBottom: 14,
        }}
      >
        <a href="#top" style={{ fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
          Aditya Rahman Ananda
        </a>
        <div style={{ marginLeft: "auto", display: "flex", gap: 18, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "var(--bg-soft)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: 7,
              cursor: "pointer",
              color: "var(--ink)",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink)",
            }}
            className="menu-btn"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "10px 22px 16px",
            borderTop: "1px solid var(--line)",
            background: "var(--card)",
          }}
          className="mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ textDecoration: "none", fontWeight: 600, color: "var(--ink)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}