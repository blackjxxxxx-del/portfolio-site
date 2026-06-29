import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--header-bg)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          height: 52,
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          TJ<span style={{ color: "var(--neon)" }}>.</span>
        </Link>

        <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "2rem" }}>
          <a href="#work" className="link-neon" style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text-muted)" }}>
            Work
          </a>
          <a href="#about" className="link-neon" style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text-muted)" }}>
            About
          </a>
          <a href="#contact" className="link-neon" style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text-muted)" }}>
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
