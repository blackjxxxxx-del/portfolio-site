import { person } from "@/data/site";

const FLOATING_LOGOS = [
  { src: "/Adobe_Photoshop_CC_icon.svg.png",      size: 52, x: "5%",  y: "14%", delay: "0s",    dur: "7s"  },
  { src: "/Adobe_Premiere_Pro_CC_icon.svg.png",   size: 44, x: "88%", y: "8%",  delay: "1.2s",  dur: "8s"  },
  { src: "/Adobe-Illustrator-Logo-Small.png",     size: 68, x: "72%", y: "62%", delay: "0.6s",  dur: "9s"  },
  { src: "/Adobe_After_Effects_CC_icon.svg.png",  size: 40, x: "6%",  y: "70%", delay: "2s",    dur: "7.5s"},
  { src: "/capcut-logo-png_seeklogo-437025.png",  size: 38, x: "88%", y: "44%", delay: "0.3s",  dur: "6.5s"},
  { src: "/claude-icon-logo.png",                 size: 46, x: "16%", y: "45%", delay: "1.8s",  dur: "8.5s"},
  { src: "/open-ai-logo-png_seeklogo-428036.png", size: 42, x: "60%", y: "10%", delay: "0.9s",  dur: "7s"  },
  { src: "/Google_Gemini_icon_2025.svg.png",      size: 44, x: "30%", y: "75%", delay: "1.5s",  dur: "9.5s"},
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        height: "100vh",
        background: "#f5f0eb",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
        paddingBottom: 72,
        gap: 0,
      }}
    >
      {/* Floating logos in background */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(3deg); }
          66%       { transform: translateY(8px) rotate(-2deg); }
        }
        @media (max-width: 768px) {
          .hero-row-2 {
            color: #111 !important;
            -webkit-text-stroke: 0px transparent !important;
            font-size: 20vw !important;
            padding-left: 4vw !important;
            padding-right: 4vw !important;
          }
          .hero-row-1 {
            font-size: 20vw !important;
            justify-content: center !important;
            gap: 4vw !important;
            padding-left: 4vw !important;
            padding-right: 4vw !important;
          }
          .hero-photo { display: none !important; }
        }
      `}</style>

      {FLOATING_LOGOS.map((logo, i) => (
        <div
          key={i}
          className="hero-logo"
          style={{
            position: "absolute",
            left: logo.x,
            top: logo.y,
            zIndex: 2,
            opacity: 1,
            animation: `floatY ${logo.dur} ease-in-out ${logo.delay} infinite`,
            pointerEvents: "none",
            filter: "grayscale(20%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt="" width={logo.size} height={logo.size} style={{ display: "block", objectFit: "contain" }} />
        </div>
      ))}

      {/* Row 1: I'M VIBE — behind photo, space-between with equal padding */}
      <div className="hero-row-1"
        style={{
          fontSize: "18vw",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 0.86,
          color: "#111",
          zIndex: 1,
          userSelect: "none",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        <span>I'M</span>
        <span style={{ color: "var(--neon)" }}>VIBE</span>
      </div>

      {/* Row 2: CODING — styled via CSS class (allows mobile override) */}
      <div className="hero-row-2"
        style={{
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 0.86,
          zIndex: 10,
          userSelect: "none",
          pointerEvents: "none",
          textAlign: "center",
          width: "100%",
        }}
      >
        CODING
      </div>

      {/* Photo: anchored to bottom of section (bleeds into next section) */}
      <div className="hero-photo"
        style={{
          position: "absolute",
          bottom: 0,
          left: "47%",
          transform: "translateX(-50%)",
          zIndex: 5,
          height: "110vh",
          pointerEvents: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.photo}
          alt={person.nameDisplay}
          style={{ height: "100%", width: "auto", objectFit: "contain", objectPosition: "bottom", display: "block" }}
        />
      </div>

    </section>
  );
}
