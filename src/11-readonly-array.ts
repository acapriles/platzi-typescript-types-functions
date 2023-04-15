
//? No permite mutar el Array. Ideal para usar en Redux para evitar que muten el state
const numbers: ReadonlyArray<number> = [1,2,2,2];
numbers.push(9);
numbers.pop();
numbers.unshift(1);
numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)
