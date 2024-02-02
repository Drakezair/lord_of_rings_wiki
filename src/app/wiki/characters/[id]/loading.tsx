import { Text } from "@/components/atom";
import { CharacterDetail } from "@/components/compounds";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const character = {
  docs: [
    {
      _id: "",
      height: "",
      race: "",
      gender: "",
      birth: "",
      spouse: "",
      death: "",
      realm: "",
      hair: "",
      name: "",
      wikiUrl: "",
    },
  ],
};

export default function Loading() {
  return (
    <CharacterDetail character={character.docs[0]}>
      <CharacterDetail.Card className="p-10 grid grid-cols-1 sm:grid-cols-2">
        <div>
          <TfiLayoutPlaceholder size={300} color="white" />
        </div>
        <div>
          <div className="w-full bg-quaternary rounded-xl my-5 h-10" />
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="w-full bg-quaternary my-3 rounded-xl h-8" />
          ))}
        </div>
      </CharacterDetail.Card>
    </CharacterDetail>
  );
}
