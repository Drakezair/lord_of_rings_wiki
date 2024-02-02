"use client";
import { IoBookmarkOutline } from "react-icons/io5";
import { CardGrid, Title } from "../atom";
import { ICharacter } from "@/types/api";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

export default function CharacterCardSkeleton({
  name,
}: ICharacter & { skeleton?: boolean }) {
  return (
    <CardGrid>
      <IoBookmarkOutline
        className="absolute top-0 right-1 cursor-pointer "
        size={30}
        color="#FFD700"
      />
      <TfiLayoutPlaceholder size={100} />
      <Title className="mt-5">{name}</Title>
    </CardGrid>
  );
}
