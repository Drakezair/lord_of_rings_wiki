"use server";

import ClientApi from "@/lib/clienAPi";
import { CharacterFilters, IApiCharacters, IApiQuotes } from "@/types/api";

const client = new ClientApi({
  api: process.env.NEXT_PUBLIC_API_URL || "",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export async function getCharacters({
  limit = "10",
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

  return await client.get(`/character?${params.toString()}`);
}

export async function getCharacterById({
  id,
}: {
  id: string;
}): Promise<IApiCharacters> {
  return await client.get(`/character/${id}`);
}

export async function getQuoteByCharacterId({
  id,
}: {
  id: string;
}): Promise<IApiQuotes> {
  return await client.get(`/character/${id}/quote`);
}

export async function getQouteById({
  id,
}: {
  id: string;
}): Promise<IApiQuotes> {
  return await client.get(`/quote/${id}`);
}

/*

Singular responsibility principle

In this example, every method has a single responsibility. 
The getCharacters method is responsible for fetching characters from the API. 
The getCharacterById method is responsible for fetching a character by ID from the API. 
The getQuoteByCharacterId method is responsible for fetching quotes by character ID from the API.
ETC.


*/
