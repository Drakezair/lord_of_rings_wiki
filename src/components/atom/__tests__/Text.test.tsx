// test with vitest for src/components/atom/Button.tsx
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from '../Text';

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

test("renders Text", () => {
  render(<Text >Test</Text>);
  expect(screen.getByText("Test")).toBeDefined();
});
