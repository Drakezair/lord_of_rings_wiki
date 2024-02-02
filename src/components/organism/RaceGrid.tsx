import { IRace } from "@/types/race";
import { RaceCard } from "../cell";

type RaceGridProps = {
  data: IRace[];
};

export default function RaceGrid({ data }: RaceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
      {data.map((race) => (
        <RaceCard key={race.name} {...race} />
      ))}
    </div>
  );
}
