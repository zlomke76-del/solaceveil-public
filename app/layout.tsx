import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolaceVeil | Governed Cognition Before Consequence",
  description:
    "Public architecture for SolaceVeil: evidence, authority, structured cognition, governance determination, and bounded execution.",
  icons: {
    icon: "/solaceveil-favicon.svg",
    shortcut: "/solaceveil-favicon.svg",
    apple: "/solaceveil-favicon.svg",
  },
  openGraph: {
    title: "SolaceVeil",
    description:
      "Models propose. Governance decides. Truth survives.",
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
