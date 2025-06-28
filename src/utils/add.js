export function add(input) {
  if (input === '') return 0;

  const numbers = input.split(',')

  const result = numbers.map((num) => parseInt(num)).reduce((acc, curr) => acc + curr, 0);
  return result;
}