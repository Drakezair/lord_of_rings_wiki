import { ICharacter } from "@/types/api";
import { CharacterCardSkeleton } from "./index";

type CardGridProps = {
  data?: ICharacter[];
};
export default function CharacterGridSkeleton({ data }: CardGridProps) {
  return (
    <div className="grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 gap-2 py-5 ">
      {data?.map((character) => (
        <CharacterCardSkeleton key={character._id} {...character} />
      ))}
    </div>
  );
}
