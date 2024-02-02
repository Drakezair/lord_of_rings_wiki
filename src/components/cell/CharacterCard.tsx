"use client";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { CardGrid, Title } from "../atom";
import Image from "next/image";
import { ICharacter } from "@/types/api";
import { races } from "@/lib/races";
import { useFavorites } from "@/hooks";
import { useRouter } from "next/navigation";

export default function CharacterCard({
  race,
  name,
  _id,
  ...props
}: ICharacter) {
  const { isFav, removeFromFavorites, addToFavorites } = useFavorites({
    character: { _id, name, race, ...props },
  });
  const router = useRouter();

  const handleRedirect = () => router.push(`/wiki/characters/${_id}`);

  const handleSpecialAddToFav = () => {
    addToFavorites();
    if (name === "Gollum") {
      router.push("/wiki/gollum");
    }
  }

  return (
    <CardGrid className="cursor-pointer">
      {isFav ? (
        <span
          onClick={() => removeFromFavorites()}
          className="absolute top-0 right-1 cursor-pointer text-primary"
        >
          <IoBookmark size={30} color="#FFD700" />
        </span>
      ) : (
        <span
          onClick={() => handleSpecialAddToFav()}
          className="absolute top-0 right-1 cursor-pointer text-primary"
        >
          <IoBookmarkOutline size={30} color="#FFD700" />
        </span>
      )}
      <div className="cursor-pointer" onClick={handleRedirect}>
        <Image
          src={`/icons/${
            name === "Gollum"
              ? "Gollum"
              : races.includes(race as string)
              ? race
              : "not-found"
          }.png`}
          alt={name}
          width={100}
          height={100}
        />
        <Title className="mt-5">{name.replace("_", " ")}</Title>
      </div>
    </CardGrid>
  );
}
