import { SearchBar } from "@/components/organism";
import { CharacterGridSkeleton } from "@/components/skeletons";
import { ICharacter } from "@/types/api";

const MockData: ICharacter[] = [
  {
    _id: "1",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "2",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "3",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "4",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "5",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "6",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "7",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "8",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "9",
    height: "",
    race: "NaN",
    name: "=========",
  },
  {
    _id: "10",
    height: "",
    race: "NaN",
    name: "=========",
  },
];

export default function Loading() {
  return (
    <>
      <CharacterGridSkeleton data={MockData} />
    </>
  );
}
