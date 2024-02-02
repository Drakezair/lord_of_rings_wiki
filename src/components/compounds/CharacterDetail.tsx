import { ICharacter } from "@/types/api";
import { CardGrid, Title } from "../atom";
import Image from "next/image";
import { races } from "@/lib/races";

type CharacterDetailProps = {
  character: ICharacter;
  children: JSX.Element;
};
export default function CharacterDetail({
  children,
  character,
}: CharacterDetailProps) {
  return <div className="my-5">{children}</div>;
}

const ImageCharacter = ({ ...character }: ICharacter) => {
  return (
    <div>
      <Image
        src={`/icons/${
          character.name === "Gollum"
            ? "Gollum"
            : races.includes(character.race as string)
            ? character.race
            : "not-found"
        }.png`}
        alt={character.name}
        width={300}
        height={300}
      />
    </div>
  );
};

const TitleCharacter = ({ name }: ICharacter) => {
  return <Title className="text-3xl my-5 text-left" >{name}</Title>;
};

CharacterDetail.Title = TitleCharacter;
CharacterDetail.Image = ImageCharacter;
CharacterDetail.Card = CardGrid;


/* 
Compount Pattern

Coumpund components are made up of multiple components.
In this example, we have a CharacterDetail component that is made up of a Title and an Image component.
The CharacterDetail component is a wrapper for the Title and Image components.
The Title and Image components are passed as children to the CharacterDetail component.
The CharacterDetail component is then used in the CharactersPage component.
The Title and Image components are then used in the CharacterDetail component.
The CharacterDetail component is a compound component because it is made up of multiple components.

*/