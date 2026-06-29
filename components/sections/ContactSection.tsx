import { person } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" style={{ background: "var(--bg-section)", padding: "7rem 0 6rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "1rem" }}>
          More portfolio
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            lineHeight: 1.0,
            marginBottom: "1.25rem",
          }}
        >
          See more of my<br />
          creative work<span style={{ color: "var(--neon)" }}>?</span>
        </h2>

        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.6 }}>
          Explore additional graphic design, video editing, and content work.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href={`mailto:${person.email}`} className="btn-neon" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            Send an email
          </a>
          <a
            href={person.additionalPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            View More Portfolio
          </a>
        </div>

      </div>
    </section>
  );
}
