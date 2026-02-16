import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legalthon 2025 | Resultados",
  description:
    "Resultados del Hackathon Académico sobre materias Jurídicas de la Blockchain. Facultad de Derecho (UBA), Comunidad Cardano, FinGurú, Project Catalyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
