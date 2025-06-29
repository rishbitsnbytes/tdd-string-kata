export function add(input) {
  if (input === '') return 0;

  let delimiter = [','];
  let numberString = input

  if (input.startsWith('//')) {
    const parts = input.split('\n');
    const delimiterLine = parts[0].substring(2);
    if(delimiterLine.startsWith('[')) { 
      // remove '[' and ']' from the delimiter
      delimiter = delimiterLine.slice(1, -1).split('][');
    } else {
      delimiter = [delimiterLine];
    }
    numberString = parts.slice(1).join('\n');
  }

  let cleanedInput = numberString.replaceAll('\n', ',');
  for (const del of delimiter) {
    cleanedInput = cleanedInput.replaceAll(del, ',');
  }
  const strNumbers = cleanedInput.split(',');

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