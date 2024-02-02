import { describe, test, expect, vi } from "vitest";
import {
  getCharacterById,
  getQouteById,
  getQuoteByCharacterId,
  getCharacters,
} from "../api";

global.fetch = vi.fn();

describe("api", () => {
  test("getCharacters", async () => {
    // @ts-expect-error
    fetch.mockResolvedValue({
      json: async () => [
        {
          _id: "1",
          height: "180",
        },
      ],
    });
    const result = await getCharacters({});
    expect(result).toEqual([
      {
        _id: "1",
        height: "180",
      },
    ]);
  });

  test("getCharacterById", async () => {
    // @ts-ignore
    fetch.mockResolvedValue({
      json: async () => ({
        _id: "1",
        height: "180",
      }),
    });
    const result = await getCharacterById({ id: "1" });
    expect(result).toEqual({
      _id: "1",
      height: "180",
    });
  });

  test("getQuoteByCharacterId", async () => {
    // @ts-ignore
    fetch.mockResolvedValue({
      json: async () => [
        {
          _id: "1",
          quote: "hello",
        },
      ],
    });
    const result = await getQuoteByCharacterId({ id: "1" });
    expect(result).toEqual([
      {
        _id: "1",
        quote: "hello",
      },
    ]);
  });

  test("getQouteById", async () => {
    // @ts-ignore
    fetch.mockResolvedValue({
      json: async () => ({
        _id: "1",
        quote: "hello",
      }),
    });
    const result = await getQouteById({ id: "1" });
    expect(result).toEqual({
      _id: "1",
      quote: "hello",
    });
  });
});


