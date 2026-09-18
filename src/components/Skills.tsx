import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <p className="lead">
          The core toolkit I use day-to-day to design, build, and operate backend systems.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {skillGroups.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
                padding: "18px 18px 8px",
              }}
            >
              <h3 style={{ fontSize: 15, marginBottom: 12 }}>{g.group}</h3>
              {g.items.map((s) => (
                <div key={s.name} style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      marginBottom: 4,
                    }}
                  >
                    <span>{s.name}</span>
                    <span style={{ color: "var(--muted)" }}>{s.level}%</span>
                  </div>
                  <div
                    style={{
                      height: 7,
                      borderRadius: 999,
                      background: "var(--bg-soft)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      style={{
                        height: "100%",
                        borderRadius: 999,
                        background: "linear-gradient(90deg, var(--brand), var(--brand-dark))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}