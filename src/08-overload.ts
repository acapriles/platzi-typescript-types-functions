function parseWord (input: string | string[]): string | string[] {
  return (Array.isArray(input)) ? input.join('') : [...input];
}

const first = parseWord('EDGAR') as string[];
const second = parseWord(first) as string;
const third = parseWord(second);

console.log(first);
console.log(second);
console.log(third);
