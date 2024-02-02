import { getCharacters } from "@/actions/api";
import { CharacterGrid, Pagination, SearchBar } from "@/components/organism";
import { defaultLimit } from "@/lib/const";
import { Metadata } from "next";

type CharacterPageProps = {
  searchParams: {
    page?: string;
    limit?: string;
    name?: string;
    race?: string;
  };
};

export const metadata: Metadata = {
  title: "Characters - Lord of the Rings Wiki",
  description: "List of characters from the Lord of the Rings",
};

export default async function CharactersPage({
  searchParams: { page, name, race, limit = defaultLimit },
}: CharacterPageProps) {
  const characters = await getCharacters({
    limit,
    page,
    name,
    race,
  });

  return (
    <section>
      <div>
        <SearchBar placeholder="Search" />
      </div>
      <CharacterGrid data={characters.docs} />
      <div className="flex justify-center mb-3">
        {!!characters.docs.length && (
          <Pagination totalPages={characters.pages} />
        )}
      </div>
    </section>
  );
}
