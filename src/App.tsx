import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          marginTop: 60,
          padding: "26px 0 40px",
          color: "var(--muted)",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        <div className="wrap">
          © {new Date().getFullYear()} Aditya Rahman Ananda · Built with React + TypeScript ·
          Icons: Lucide (open source) · Fonts: Google Fonts (SIL OFL) · Screenshots: demo mockups
        </div>
      </footer>
    </>
  );
}