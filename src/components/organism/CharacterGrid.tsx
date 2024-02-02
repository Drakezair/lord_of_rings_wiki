import { ICharacter } from "@/types/api";
import { CharacterCard } from "../cell";
import { WithSuspense } from "../HOC";
import Loading from "@/app/wiki/characters/loading";

type CardGridProps = {
  data?: ICharacter[];
};
function CharacterGrid({ data }: CardGridProps) {
  if (data?.length === 0)
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-3xl text-gray-500">No characters found</p>
      </div>
    );
  return (
    <div className="grid grid-cols-5 grid-rows-2 max-sm:grid-cols-1 max-md:grid-cols-3 gap-2 py-5">
      {data?.map((character) => (
        <CharacterCard key={character.name} {...character} />
      ))}
    </div>
  );
}

export default WithSuspense(CharacterGrid, <Loading />);
