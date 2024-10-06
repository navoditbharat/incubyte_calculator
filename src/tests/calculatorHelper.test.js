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
});
