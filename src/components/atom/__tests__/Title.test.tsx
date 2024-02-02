// test with vitest for src/components/atom/Button.tsx
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from '../Title';

vi.mock('next/font/google', () => ({
  Merriweather: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  
  Poppins: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  
}))

test("renders Title", () => {
  render(<Title >Test</Title>);
  expect(screen.getByText("Test")).toBeDefined();
});
