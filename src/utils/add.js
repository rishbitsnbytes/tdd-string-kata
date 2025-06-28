export function add(input) {
  if (input === '') return 0;

  const cleanedInput = input.replaceAll('\n', ',');
  const numbers = cleanedInput.split(',');

  const result = numbers.map((num) => parseInt(num)).reduce((acc, curr) => acc + curr, 0);
  return result;
}