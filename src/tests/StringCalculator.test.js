import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StringCalculator from "../components/StringCalculator";

describe("String Calculator UI tests", () => {
  test("renders input and button elements", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText(/enter numbers with delimiters/i);
    const button = screen.getByRole("button", { name: /calculate/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
