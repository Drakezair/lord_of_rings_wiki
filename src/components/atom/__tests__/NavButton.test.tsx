// test with vitest for src/components/atom/Button.tsx
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NavButton from '../NavButton';

test("renders NavButton", () => {
  render(<NavButton href="/" text="test" />);
  expect(screen.getByText("test")).toBeDefined();
});
