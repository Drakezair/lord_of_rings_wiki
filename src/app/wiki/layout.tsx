import type { Metadata } from "next";
import { HeaderNav } from "@/components/organism";
import { Container } from "@/components/atom";

export const metadata: Metadata = {
  title: "Middle Earth - Rings of Power",
  description: "Your Ultimate Gateway to Tolkien’s Magical Universe",
};

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <HeaderNav dark />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
