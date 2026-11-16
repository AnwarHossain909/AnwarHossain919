import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://anwarhossain909.github.io/AnwarHossain919";
const title = "Anwar Hossain | Odoo Developer in Bangladesh";
const description = "Odoo Developer in Bangladesh specializing in custom Odoo modules, ERP customization, workflow automation, Python, PostgreSQL and REST API integration.";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anwar Hossain",
  url: siteUrl,
  image: siteUrl + "/anwar-cutout.png",
  jobTitle: "Odoo Developer and Python Backend Developer",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
  sameAs: ["https://www.linkedin.com/in/anwarhossain909/", "https://github.com/AnwarHossain909"],
  knowsAbout: ["Odoo ERP", "Odoo Module Development", "Python", "PostgreSQL", "ERP Customization", "REST API"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Odoo Developer in Bangladesh", "Odoo Developer", "Python Backend Developer", "ERP Customization", "Odoo ERP", "Odoo Module Development", "Python", "PostgreSQL", "REST API", "Dhaka"],
  authors: [{ name: "Anwar Hossain", url: "https://www.linkedin.com/in/anwarhossain909/" }],
  creator: "Anwar Hossain",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Anwar Hossain Portfolio",
    title,
    description,
    locale: "en_US",
    images: [{ url: "/anwar-cutout.png", width: 941, height: 1670, alt: "Anwar Hossain, Odoo Developer in Bangladesh" }],
  },
  twitter: { card: "summary", title, description, images: ["/anwar-cutout.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body></html>;
}
