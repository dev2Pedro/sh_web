import type React from "react";
import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sucatinha da Hora SH | Compra de Sucatas e Serviços de Frete",
  description:
    "Empresa especializada em compra e venda de sucatas metálicas e serviços de frete e transporte em São Paulo. Preços justos e atendimento profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
