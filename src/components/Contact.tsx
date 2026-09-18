import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "adityard01.dev@gmail.com",
    href: "mailto:adityard01.dev@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/adityarahmanananda-dev",
    href: "https://github.com/adityarahmanananda-dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia · open to relocation",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <p className="lead">
          Looking for a backend engineer who can build reliable systems and ship impact?
          Let&apos;s talk.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {items.map((it, idx) => {
            const Icon = it.icon;
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow)",
                  padding: 18,
                  height: "100%",
                }}
              >
                <Icon size={22} color="var(--brand)" style={{ marginBottom: 8 }} />
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>
                  {it.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, wordBreak: "break-word" }}>
                  {it.value}
                </div>
              </motion.div>
            );
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {inner}
              </a>
            ) : (
              <div key={it.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}