import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders string calulator text on screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/string calculator/i);
  expect(linkElement).toBeInTheDocument();
});
