// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CardGrid from "../CardGrid";

test("renders CardGrid", () => {
  render(<CardGrid>Test</CardGrid>);
  expect(screen.getByText("Test")).toBeDefined();
});
