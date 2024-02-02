export type ICharacter = {
  _id: string;
  height?: string;
  race?: string;
  gender?: string;
  birth?: string;
  spouse?: string;
  death?: string;
  realm?: string;
  hair?: string;
  name: string;
  wikiUrl?: string;
};

export type IQuote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export type IApiResponse = {
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};

export type IApiCharacters = IApiResponse & {
  docs: ICharacter[];
};

export type IApiQuotes = IApiResponse & {
  docs: IQuote[];
};

export type CharacterFilters = {
  limit?: string;
  offset?: string;
  page?: string;
  name?: string;
  race?: string;
};

/*
Interface segregation principle

The interface segregation principle states that a class should not be forced to implement interfaces that it does not use. Instead of one fat interface many small interfaces are preferred based on groups of methods, each one serving one submodule.
In this example we have a single interface that is used in multiple places, but not all of the properties are used in all of the places. We can split the interface into multiple smaller interfaces, each with a single responsibility.

*/
