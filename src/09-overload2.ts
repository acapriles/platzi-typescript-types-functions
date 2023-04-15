
//? Sobre carga de los métodos
function parseWord(input: string): string[];
function parseWord(input: string[]): string;


/* function parseWord (input: string | string[]): string | string[] {
  return (Array.isArray(input)) ? input.join('') : [...input];
} */

function parseWord (input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('')
  } else if (typeof input === 'string') {
    return input.split('');
  }
}

const first = parseWord('ANDERSON');
const second = parseWord(first);

console.log(first);
console.log(second);


export{}
