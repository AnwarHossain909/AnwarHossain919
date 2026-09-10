import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Anwar Hossain | Odoo & Python Developer",
  description: "Anwar Hossain — Odoo Developer and Python Backend Developer"
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}