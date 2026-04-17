import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: "SENORIS | Agence Tech Premium & Cybersécurité au Sénégal",
  description: "Senoris accompagne les entreprises dans leur transformation digitale : Développement d'applications web & mobiles, Audits de cybersécurité et Solutions SaaS innovantes à Dakar.",
  keywords: ["Senoris", "Cybersécurité Sénégal", "Développement Web Dakar", "Agence Tech Sénégal", "Audit sécurité", "Application Mobile Sénégal"],
  authors: [{ name: "Senoris Group" }],
  openGraph: {
    title: "SENORIS | Transformation Digitale & Sécurité",
    description: "Expertise en développement sur-mesure et cybersécurité offensive au Sénégal.",
    url: "https://senoris.net",
    siteName: "Senoris",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
