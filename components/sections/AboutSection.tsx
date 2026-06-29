import { person, skills, experience } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" style={{ background: "#0f0f0f" }}>

      {/* ── Intro block ── */}
      <div className="about-intro-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 64px 0" }}>

        {/* Two columns: text left, photo right */}
        <div className="about-intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "80px", alignItems: "end" }}>

          {/* LEFT — all text content */}
          <ScrollReveal>
            <div className="about-copy" style={{ display: "flex", flexDirection: "column", gap: "28px", paddingBottom: "60px" }}>

              <div>
                <h2 style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900,
                  letterSpacing: "-0.04em", color: "#ffffff",
                  lineHeight: 1, margin: "0 0 12px",
                }}>
                  I'M <span style={{ color: "var(--neon)" }}>JAY</span>
                </h2>
                <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
                  Thitima Jobkum
                </p>
                <p style={{ fontSize: "0.95rem", color: "#555", margin: 0, fontWeight: 500 }}>
                  Graphic Designer · Vibe Coder · AI-Powered · Content Creator
                </p>
              </div>

              <p style={{ fontSize: "1.05rem", color: "#888", lineHeight: 1.8, margin: 0, maxWidth: "52ch" }}>
                {person.bio}
              </p>

              {/* Stats row */}
              <div className="about-stats" style={{ display: "flex", gap: "48px" }}>
                {[
                  { value: "5+", label: "Years Exp." },
                  { value: "30+", label: "Projects" },
                  { value: "3", label: "Disciplines" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#555", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="about-actions" style={{ display: "flex", gap: "12px" }}>
                <a href="#contact" className="btn-neon" style={{ padding: "12px 28px" }}>Hire me</a>
                <a href="#work" className="btn-outline" style={{ padding: "12px 28px", background: "transparent", color: "#fff", border: "1px solid #2a2a2a" }}>My work</a>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT — photo, no border, bleeds to bottom */}
          <ScrollReveal delay={100}>
            <div style={{ overflow: "hidden", lineHeight: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ChatGPT Image 29 มิ.ย. 2569 03_55_58 copy.png"
                alt={person.nameDisplay}
                style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(100%) contrast(1.05)" }}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ── Skills block ── */}
      <div style={{ background: "#161616" }}>
        <div className="skills-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 64px" }}>

          {/* Header row */}
          <ScrollReveal>
            <div className="section-heading-row" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "48px" }}>
              <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", margin: 0 }}>
                Skills <span style={{ color: "var(--neon)" }}>&</span> Tools
              </h3>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>
                {skills.reduce((acc, g) => acc + g.items.length, 0)} tools total
              </span>
            </div>
          </ScrollReveal>

          {/* Each skill category as a horizontal row */}
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 60}>
              <div className="skill-row" style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "32px",
                alignItems: "start",
                padding: "24px 0",
                borderTop: i === 0 ? "1px solid #2a2a2a" : "1px solid #222",
              }}>
                {/* Category label */}
                <div className="skill-label" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--neon)", minWidth: "24px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
                    {group.category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="skill-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((skill) => (
                    <span key={skill} style={{
                      fontSize: "0.8rem", fontWeight: 500, color: "#ffffff",
                      background: "#262626",
                      border: "1px solid #3d3d3d",
                      borderRadius: 6,
                      padding: "6px 14px",
                      letterSpacing: "0.01em",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>

      {/* ── Experience ── */}
      <div style={{ background: "#0f0f0f" }}>
        <div className="experience-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 64px" }}>

          <ScrollReveal>
            <div className="section-heading-row" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "40px" }}>
              <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", margin: 0 }}>
                Experi<span style={{ color: "var(--neon)" }}>ence</span>
              </h3>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>
                {experience.length} roles
              </span>
            </div>
          </ScrollReveal>

          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="experience-row" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 0",
                borderTop: "1px solid #1f1f1f",
                gap: "24px",
              }}>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, color: "var(--neon)",
                  background: "rgba(0,168,84,0.08)", border: "1px solid rgba(0,168,84,0.18)",
                  borderRadius: 4, padding: "3px 10px", whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  {item.year}
                </span>

                <p className="experience-role" style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em", flex: "0 0 auto" }}>
                  {item.role}
                </p>

                <div className="experience-line" style={{ flex: 1, height: 1, background: "#222" }} />

                <p className="experience-company" style={{ fontSize: "0.82rem", color: "var(--neon)", fontWeight: 600, margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}>
                  {item.company}
                </p>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>

    </section>
  );
}
