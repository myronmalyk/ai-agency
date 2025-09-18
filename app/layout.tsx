import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myrons.agency"),
  applicationName: "Myron’s Agency",
  title: {
    default: "Myron’s Agency — AI Solutions That Drive Business Growth",
    template: "%s | Myron’s Agency",
  },
  description:
    "AI agency in Vancouver helping SMBs and enterprises automate workflows, build AI chatbots, predictive analytics, and data platforms. Free 30-min strategy call.",
  keywords: [
    "AI agency",
    "AI automation",
    "AI chatbots",
    "predictive analytics",
    "process automation",
    "data strategy",
    "n8n automation",
    "Vancouver",
    "Canada",
  ],
  category: "technology",
  authors: [{ name: "Myron’s Agency" }],
  creator: "Myron’s Agency",
  publisher: "Myron’s Agency",
  alternates: {
    canonical: "/",
    // Si planificas multi-idioma:
    // languages: { "en-CA": "/", "es-ES": "/es", "ru-RU": "/ru" },
  },
  openGraph: {
    type: "website",
    url: "https://myrons.agency/",
    siteName: "Myron’s Agency",
    title: "AI Solutions That Drive Business Growth",
    description:
      "We deliver custom AI solutions: chatbots, automation, predictive analytics, and data platforms.",
    locale: "en_CA",
    images: [
      {
        url: "/og/og-home.png", // crea esta imagen 1200x630
        width: 1200,
        height: 630,
        alt: "Myron’s Agency — AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myron’s Agency — AI Solutions",
    description:
      "Automation, AI chatbots, predictive analytics, and data engineering for business growth.",
    images: ["/og/og-home.png"],
    // site: "@tuCuenta", creator: "@tuCuenta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Añade tus verificaciones cuando las tengas:
    // google: "tu-google-site-verification",
    // yandex: "...",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1020",      // ✅ ahora sí válido
};



// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Myron’s Agency",
    url: "https://myrons.agency",
    logo: "https://myrons.agency/logo.png",
    image: "https://myrons.agency/og/og-home.png",
    telephone: "+1-672-208-8280",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: ["CA", "US"],
    sameAs: [
      // añade tus perfiles cuando los tengas
      // "https://www.linkedin.com/company/...",
      // "https://twitter.com/..."
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Myron’s Agency",
    url: "https://myrons.agency",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://myrons.agency/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "AI Chatbots & Virtual Assistants",
        areaServed: "CA/US",
      },
      {
        "@type": "Service",
        name: "Process Automation",
        areaServed: "CA/US",
      },
      { "@type": "Service", name: "Predictive Analytics", areaServed: "CA/US" },
      { "@type": "Service", name: "Data Strategy & Infrastructure", areaServed: "CA/US" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#0B1020] text-white font-sans antialiased`}>
        <Navbar />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}

