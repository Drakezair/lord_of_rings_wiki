import { RaceGrid } from "@/components/organism";
import { racesInfo } from "@/lib/races";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Races - Lord of the Rings Wiki",
  description: "Race information from the Lord of the Rings",
};

export default function RacePage() {
  return (
    <section>
      <RaceGrid data={racesInfo} />
    </section>
  );
}

/*
Render Props Pattern

The Render Props pattern is a pattern that allows you to pass a function as a prop to a component.
In this example, the RacePage component uses the RaceGrid component
The RaceGrid component uses the Render Props pattern to pass

*/
