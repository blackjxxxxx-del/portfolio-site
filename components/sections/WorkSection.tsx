"use client";
import { projects } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WorkSection() {
  return (
    <section id="work" className="work-section" style={{ background: "#0a0a0a", padding: "80px 0 100px" }}>
      <div className="work-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}>

        {/* Header */}
        <ScrollReveal>
          <div className="work-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900,
              letterSpacing: "-0.04em", color: "#fff", margin: 0, lineHeight: 1,
            }}>
              My <span style={{ color: "var(--neon)" }}>Work</span>
            </h2>
            <p className="work-heading-copy" style={{ fontSize: "0.85rem", color: "#555", margin: 0, maxWidth: "28ch", textAlign: "right", lineHeight: 1.6 }}>
              เว็บไซต์ที่สร้างด้วย vibe coding<br />และ AI-assisted development
            </p>
          </div>
        </ScrollReveal>

        {/* Projects — numbered list style */}
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: "32px",
                alignItems: "center",
                padding: "32px 0",
                borderTop: "1px solid #1e1e1e",
                textDecoration: "none",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              className="work-row"
            >
              {/* Number */}
              <span style={{
                fontSize: "0.75rem", fontWeight: 800,
                color: "var(--neon)", letterSpacing: "0.1em",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div className="work-title-row" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <h3 style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 900,
                    letterSpacing: "-0.03em", color: "#fff", margin: 0,
                    transition: "color 0.2s",
                  }}>
                    {p.title}
                  </h3>
                  <span className="work-category" style={{
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--neon)",
                    background: "rgba(0,168,84,0.08)",
                    border: "1px solid rgba(0,168,84,0.2)",
                    borderRadius: 4, padding: "3px 10px", whiteSpace: "nowrap",
                  }}>
                    {p.category}
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#555", margin: 0, lineHeight: 1.6, maxWidth: "60ch" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: "0.7rem", color: "#444",
                      background: "#1a1a1a", border: "1px solid #2a2a2a",
                      borderRadius: 4, padding: "2px 8px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "1px solid #2a2a2a",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#444", fontSize: "1.1rem", flexShrink: 0,
                transition: "border-color 0.2s, color 0.2s",
              }}>
                ↗
              </div>
            </a>
          </ScrollReveal>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: "1px solid #1e1e1e" }} />

      </div>

      <style>{`
        .work-row:hover h3 { color: var(--neon) !important; }
        .work-row:hover > div:last-child {
          border-color: var(--neon) !important;
          color: var(--neon) !important;
        }
      `}</style>
    </section>
  );
}
