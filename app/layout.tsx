import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Pusat Usaha Terbaik - Babulu Darat Km. 53",
  description: "Titik singgah strategis di Km. 53 Babulu Darat. Menawarkan pelayanan terbaik, akses mudah dari jalan raya, dan parkir luas untuk kendaraan besar maupun kecil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
