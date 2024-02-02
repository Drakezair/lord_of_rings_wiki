// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "../Container";

test("renders Container", () => {
  render(<Container>Test</Container>);
  expect(screen.getByTestId("container")).toBeDefined();
});
