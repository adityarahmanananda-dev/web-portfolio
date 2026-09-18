import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Languages } from "lucide-react";

const facts = [
  {
    icon: Briefcase,
    title: "10+ years",
    text: "Backend engineering for government & academic institutions.",
  },
  {
    icon: GraduationCap,
    title: "M.IT & B.CS",
    text: "Universitas Indonesia — software engineering, big data.",
  },
  {
    icon: Languages,
    title: "English · TOEIC 925",
    text: "Full professional proficiency, plus conversational Korean.",
  },
  {
    icon: Globe,
    title: "Open to relocation",
    text: "Flexible to work from any location for the right role.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <p className="lead">
          I build reliable, well-tested backend systems that turn complex business rules
          into dependable software — from enterprise accounting and government finance to
          automation and developer tooling.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {facts.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow)",
                  padding: 18,
                }}
              >
                <Icon size={22} color="var(--brand)" style={{ marginBottom: 8 }} />
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", margin: 0 }}>{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}