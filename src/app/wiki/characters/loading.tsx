import { SearchBar } from "@/components/organism";
import { CharacterGridSkeleton } from "@/components/skeletons";
import { MockIncompleteCharacters } from "@/lib/mocks";


export default function Loading() {
  return (
    <>
      <SearchBar />
      <CharacterGridSkeleton data={MockIncompleteCharacters} />
    </>
  );
}
