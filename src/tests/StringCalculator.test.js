import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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

  test("displays the correct sum when valid input is provided", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText(/enter numbers with delimiters/i);
    const button = screen.getByRole("button", { name: /calculate/i });

    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);

    const resultMessage = screen.getByText(/result: 6/i);
    expect(resultMessage).toBeInTheDocument();
  });

  test("displays an error when input contains negative numbers", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText(/enter numbers with delimiters/i);
    const button = screen.getByRole("button", { name: /calculate/i });

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    const errorMessage = screen.getByText(/negative numbers not allowed/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
