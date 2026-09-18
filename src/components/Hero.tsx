import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";

const roles = [
  "Backend Software Engineer",
  "Python · FastAPI · Flask",
  "Go · PostgreSQL · Docker",
  "Data Pipelines & Automation",
  "REST APIs & Microservices",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 60%, #312e81 100%)",
        color: "#fff",
        padding: "78px 0 70px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,.12), transparent 40%), radial-gradient(circle at 85% 20%, rgba(96,165,250,.25), transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div className="wrap" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 6 }}>
            Hello, I&apos;m
          </p>
          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.1,
              margin: "0 0 10px",
              letterSpacing: "-0.6px",
            }}
          >
            Aditya Rahman Ananda
          </h1>
          <p
            style={{
              fontSize: 19,
              minHeight: 30,
              color: "#dbeafe",
              fontFamily: "var(--font-sans)",
            }}
          >
            <span className="display" style={{ fontWeight: 600 }}>
              {typed}
            </span>
            <span style={{ color: "#93c5fd" }}>|</span>
          </p>
          <p style={{ fontSize: 15, opacity: 0.92, maxWidth: 720, marginTop: 18 }}>
            10+ years designing, building, and running backend services and data pipelines
            for business-critical enterprise systems — government, finance, and automation.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
            <a href="#projects" className="btn primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>
          <div style={{ display: "flex", gap: 18, marginTop: 24, color: "#dbeafe" }}>
            <a
              href="https://github.com/adityarahmanananda-dev"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontSize: 14 }}
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="mailto:adityard01.dev@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontSize: 14 }}
            >
              <Mail size={17} /> Email
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
              <MapPin size={17} /> Jakarta · open to relocation
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}