// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Select from '../Select';

test("renders Select", () => {
  render(<Select options={['Test']} />);
  expect(screen.getByText("Test")).toBeDefined();
});
