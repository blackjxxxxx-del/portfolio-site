import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "THITIMA JOBKUM — Designer & Developer",
  description: "Portfolio of THITIMA JOBKUM — Web Design, Development, Branding & Marketing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body style={{ fontFamily: "var(--font-space), 'Space Grotesk', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
