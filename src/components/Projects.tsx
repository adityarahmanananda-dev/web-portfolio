import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <p className="lead">
          Fully working applications built for real use. Each card shows what it does, how
          it was built, and the impact it delivered.
        </p>
        <div
          style={{
            background: "var(--bg-soft)",
            border: "1px solid var(--line)",
            color: "var(--muted)",
            fontSize: 12.5,
            borderRadius: 10,
            padding: "10px 14px",
            marginBottom: 24,
          }}
        >
          Screenshots are UI mockups rendered with dummy data for demo purposes — no real
          or confidential data is shown.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 22,
          }}
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a href={p.demo} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                <img
                  src={p.shot}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    display: "block",
                    borderBottom: "1px solid var(--line)",
                    transition: "transform 0.35s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
              <div
                style={{
                  padding: "18px 18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3 style={{ fontSize: 18, marginBottom: 2 }}>{p.title}</h3>
                <div
                  style={{
                    color: p.accent,
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    marginBottom: 10,
                  }}
                >
                  {p.subtitle}
                </div>
                <p style={{ fontSize: 13.5, color: "var(--ink)", margin: 0 }}>
                  {p.description}
                </p>
                <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "8px 0 0" }}>
                  <b style={{ color: "var(--ink)" }}>Built: </b>
                  {p.how}
                </p>
                <p style={{ fontSize: 13.5, margin: "8px 0 0" }}>
                  <b style={{ color: "var(--good)" }}>Impact: </b>
                  {p.impact}
                </p>
                <div
                  style={{
                    margin: "12px 0 14px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "var(--good-bg)",
                        color: "var(--good)",
                        fontSize: 11.5,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn sm">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn sm">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}