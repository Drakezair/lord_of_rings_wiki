import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites - Lord of the Rings Wiki",
  description: "List of favorite characters from the Lord of the Rings",
};

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
