import type { Metadata } from "next";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";

import { Nunito_Sans, Montserrat } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Ultrapan | Panificación industrial",
    template: "%s | Ultrapan",
  },
  description:
    "Ultrapan es una empresa de panificación industrial enfocada en procesos estandarizados, calidad consistente y soluciones B2B para la industria alimentaria.",
  applicationName: "Ultrapan",
  metadataBase: new URL("https://ultrapan.mx"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ultrapan.mx",
    siteName: "Ultrapan",
    title: "Ultrapan | Panificación industrial",
    description:
      "Soluciones de panificación industrial con enfoque en calidad, escala y procesos productivos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ultrapan – Panificación industrial",
      },
    ],
  },
  alternates: {
    canonical: "https://ultrapan.mx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${nunito.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <div style={{ overflow: "auto" }}>
          <main className="mainContent">{children}</main>
          <ContactForm />
        </div>
        <Footer />
      </body>
    </html>
  );
}
