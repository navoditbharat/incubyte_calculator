export function addNumbersFromString(numbers) {
  if (!numbers) return 0;
  let delimiter = /,|\n/;
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
