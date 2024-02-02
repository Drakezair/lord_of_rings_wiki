// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../Input";

test("renders Container", () => {
  render(<Input id="test" type="text"  placeholder="test"/>);
  expect(screen.getByPlaceholderText("test")).toBeDefined();
});
