// test with vitest for src/components/atom/Button.tsx
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Subtitle from '../Subtitle';

vi.mock('next/font/google', () => ({
  Merriweather: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}))

test("renders Subtitle", () => {
  render(<Subtitle >Test</Subtitle>);
  expect(screen.getByText("Test")).toBeDefined();
});
