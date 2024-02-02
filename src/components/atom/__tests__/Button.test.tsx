// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("renders Button", () => {
  render(<Button>Test</Button>);
  expect(screen.getByText("Test")).toBeDefined();
});
