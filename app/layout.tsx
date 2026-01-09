import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "H Manuel Lomelín",
    template: "%s | H Manuel Lomelín"
  },
  description:
    "Pensamiento estratégico, tecnología y evolución personal.",
  metadataBase: new URL("https://manuel-lomelin.com"),
  openGraph: {
    title: "H Manuel Lomelín",
    description:
      "Pensamiento estratégico, tecnología y evolución personal.",
    type: "website",
    locale: "es_MX"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
