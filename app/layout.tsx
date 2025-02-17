"use client";

import Header from "@/components/header";
import { Montserrat } from 'next/font/google';

import '../styles/globals.css';



const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        <Header/>
        
        
        {children}</body>
    </html>
  );
}
