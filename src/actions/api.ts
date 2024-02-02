"use server";

import { CharacterFilters, IApiCharacters, IApiQuotes } from "@/types/api";

export async function getCharacters({
  limit = "10",
  offset = "0",
  page = "1",
  name,
  race,
}: CharacterFilters): Promise<IApiCharacters> {
  const params = new URLSearchParams();
  params.set("limit", limit.toString());
  params.set("page", page.toString());
  if (name) {
    params.set("name", name);
  }
  if (race) {
    params.set("race", race);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/character?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getCharacterById({
  id,
}: {
  id: string;
}): Promise<IApiCharacters> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/character/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getQuoteByCharacterId({
  id,
}: {
  id: string;
}): Promise<IApiQuotes> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/character/${id}/quote`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getQouteById({
  id,
}: {
  id: string;
}): Promise<IApiQuotes> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/quote/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

/*

Singular responsibility principle

In this example, every method has a single responsibility. 
The getCharacters method is responsible for fetching characters from the API. 
The getCharacterById method is responsible for fetching a character by ID from the API. 
The getQuoteByCharacterId method is responsible for fetching quotes by character ID from the API.
ETC.


*/
