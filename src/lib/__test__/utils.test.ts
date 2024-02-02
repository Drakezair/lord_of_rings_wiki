import { test, expect } from "vitest";
import { capitalizeFirstLetter } from "../utils";

test("capitalizeFirstLetter", () => {
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
});
