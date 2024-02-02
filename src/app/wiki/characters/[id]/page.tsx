import { getCharacterById, getQuoteByCharacterId } from "@/actions/api";
import { Text } from "@/components/atom";
import { CharacterDetail } from "@/components/compounds";

type CharactersPageProps = {
  params: {
    id: string;
  };
};



export default async function CharacterDetailPage({
  params: { id },
}: CharactersPageProps) {
  const character = await getCharacterById({ id });
  const quotes = await getQuoteByCharacterId({ id });

  return (
    <CharacterDetail character={character.docs[0]}>
      <CharacterDetail.Card className="p-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex items-center flex-col">
          <CharacterDetail.Image {...character.docs[0]} />
          {quotes.docs[0] && (
            <Text className="text-center mt-5">&quot;{quotes.docs[0].dialog}&quot;</Text>
          )}
        </div>
        <div>
          <CharacterDetail.Title {...character.docs[0]} />
          {Object.keys(character.docs[0] as any)
            .filter((key) => key !== "_id")
            .map((key: string) => (
              <span
                className="flex my-5 w-full md:w-80 max-md:flex-col max-md:items-start"
                key={key}
              >
                <Text
                  className="mr-2 font-bold text-wrap flex-wrap"
                  font="poppins"
                  key={key}
                >
                  {key}:
                </Text>
                <Text key={key}>
                  {/* @ts-ignore */}
                  {character.docs[0][key] ? character.docs[0][key] : "NAN"}
                </Text>
              </span>
            ))}
        </div>
      </CharacterDetail.Card>
    </CharacterDetail>
  );
}

/*

Liskov Substitution Principle

In this example, the CharactersPage component is a subtype of the Page component.
To use Api, we need to use the getCharacterById and getQuoteByCharacterId functions.
And the component dont need to know how the functions work, just need to know how to use it.

============================================================================================

Parallel and Sequential Patterns

In this example, the CharactersPage component is a parallel pattern.
The getCharacterById and getQuoteByCharacterId functions are called in parallel.

*/
