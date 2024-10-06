import { addNumbersFromString } from "../helpers/calculatorHelper";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(addNumbersFromString("")).toBe(0);
  });

  test("should return the number when input is a single number", () => {
    expect(addNumbersFromString("1")).toBe(1);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(addNumbersFromString("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(addNumbersFromString("1,2,3")).toBe(6);
  });

  test("should handle newlines between numbers as valid delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test("should list all negative numbers in the error message", () => {
    expect(() => add("1,-2,-3")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
});
