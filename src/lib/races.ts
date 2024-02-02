import { IRace } from "@/types/race";

export const races: string[] = [
  "Dwarf",
  "Elf",
  "Ainur",
  "Human",
  "Dragons",
  "Eagle",
  "Ents",
  "Great Eagles",
  "Hobbits",
  "Orcs",
  "Orc",
  "Vampire",
  "Great Spiders",
  "Hobbit",
  "NaN",
  "Maiar",
];

export const racesInfo: IRace[] = [
  {
    img: "/img/races/dwarf.jpg",
    name: "Dwarf",
    description:
      "Dwarves are a proud and stern people who are known for their strong will and hardy nature.",
    urlParams: ["Dwarf"],
  },
  {
    img: "/img/races/elf.webp",
    name: "Elf",
    description:
      "he Elves were the first and eldest Children of Ilúvatar, considered the fairest and wisest of the earthly race of Arda.",
    urlParams: ["Elf"],
  },
  {
    img: "/img/races/hobbit.jpeg",
    name: "Hobbit",
    description:
      "Hobbits are a small, friendly people who are known for their love of good food and peace.",
    urlParams: ["Hobbit", "Hobbits"],
  },
  {
    img: "/img/races/human.webp",
    name: "Human",
    description:
      "Men (initially named Atani) were one of several races inhabiting Arda. They were the humans of Middle-earth, and the second of the Children of Ilúvatar.",
    urlParams: ["Human", "Humans"],
  },
  {
    img: "/img/races/maiar.jpeg",
    name: "Maiar",
    description:
      "The Maiar were Ainur who entered the world in its beginning, and took physical form.",
    urlParams: ["Maiar"],
  },

  {
    img: "/img/races/Orc.jpeg",
    name: "Orc",
    description:
      "Orcs were the primary foot soldiers of the Dark Lords' armies and sometimes the weakest (but most numerous) of their servants.",
    urlParams: ["Orc", "Orcs"],
  },
];


