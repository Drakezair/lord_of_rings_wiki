"use client";

import Image from "next/image";
import { CardGrid, Text } from "../atom";
import { IRace } from "@/types/race";
import { usePathname, useRouter } from "next/navigation";

type RaceCardProps = {} & IRace;

export default function RaceCard({
  img,
  name,
  description,
  urlParams,
}: RaceCardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const openRace = () => {
    const params = new URLSearchParams();
    params.set("race", urlParams.join(",") || "");
    router.push(`/wiki/characters?${params.toString()}`);
  };
  return (
    <CardGrid className="cursor-pointer" onClick={openRace}>
      <div className="h-52 w-52 relative">
        <Image layout="fill" src={img} alt={name} />
      </div>
      <div className="mt-5">
        <Text font="poppins" className="font-bold text-2xl">
          {name}
        </Text>
        <Text>{description}</Text>
      </div>
    </CardGrid>
  );
}
