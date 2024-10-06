export function addNumbersFromString(numbers) {
  if (!numbers) return 0;
  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  const negativeNumbers = numArray.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
