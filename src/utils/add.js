export function add(input) {
  if (input === '') return 0;

  let delimiter = ',';
  let numberString = input

  if (input.startsWith('//')) {
    const parts = input.split('\n');
    delimiter = parts[0].substring(2);
    numberString = parts.slice(1).join('\n');
  }

  const cleanedInput = numberString.replaceAll('\n', delimiter);
  const strNumbers = cleanedInput.split(delimiter);

  const numbers = strNumbers.map((num) => parseInt(num)).filter((num) => !isNaN(num));
  const negatives = numbers.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);
  }

  const result = numbers
    .filter((num) => num <= 1000)
    .reduce((acc, curr) => acc + curr, 0);
  return result;
}