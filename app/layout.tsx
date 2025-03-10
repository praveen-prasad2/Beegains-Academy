"use client";

import Header from "@/components/Global/header";

import { Toaster } from "@/components/ui/sonner";

import "../styles/globals.css";
import Footer from "@/components/Global/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Toaster position="top-left" />
        <Footer />
      </body>
    </html>
  );
}
