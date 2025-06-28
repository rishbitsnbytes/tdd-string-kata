export function add(input) {
  if (input === '') return 0;

  let delimiter = ',';
  let numberString = input

  if (input.startsWith('//')) {
    const parts = input.split('\n');
    delimiter = parts[0].substring(2);
    numberString = parts.slice(1).join(delimiter);
  }

  const cleanedInput = numberString.replaceAll('\n', delimiter);
  const numbers = cleanedInput.split(delimiter);

  const result = numbers.map((num) => parseInt(num)).reduce((acc, curr) => acc + curr, 0);
  return result;
}