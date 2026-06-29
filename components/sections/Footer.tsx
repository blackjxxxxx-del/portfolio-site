import { person } from "@/data/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border-soft)", padding: "2rem 24px" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--text)" }}>
          TJ<span style={{ color: "var(--neon)" }}>.</span>
        </span>
        <p style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} {person.name}
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: person.social.github },
            { label: "LinkedIn", href: person.social.linkedin },
            { label: "Instagram", href: person.social.instagram },
          ].map(link => (
            <a key={link.label} href={link.href} className="link-muted"
              style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
