import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolaceVeil | Governed Cognition Runtime",
  description:
    "Public-facing overview for SolaceVeil, a governed cognition runtime for continuity-aware AI systems.",
  icons: {
    icon: "/solaceveil-favicon.svg",
    shortcut: "/solaceveil-favicon.svg",
    apple: "/solaceveil-favicon.svg",
  },
  openGraph: {
    title: "SolaceVeil",
    description:
      "Governed cognition runtime for continuity-aware AI systems operating under real-world consequence.",
    images: ["/solaceveil-favicon.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
