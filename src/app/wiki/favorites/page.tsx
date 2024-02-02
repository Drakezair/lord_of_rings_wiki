"use client";
import { CharacterGrid } from "@/components/organism";
import { useFavorites } from "@/hooks";

export default function FavoritesPage() {
  const { state: characters } = useFavorites({});

  return (
    <section>
      <CharacterGrid data={characters} />
    </section>
  );
}
