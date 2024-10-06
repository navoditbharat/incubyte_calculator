export function addNumbersFromString(numbers) {
  if (!numbers) return 0;
  let delimiter = /,|\n/;
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

  const negativeNumbers = numArray.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
