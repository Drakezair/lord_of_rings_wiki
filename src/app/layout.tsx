import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Middle Earth - Rings of Power",
  description: "Your Ultimate Gateway to Tolkien’s Magical Universe",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
