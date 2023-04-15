const prices: ( string | number)[] = [1, 2, "home"];



// Tuple (tupla)
let user1: [string, number, boolean] = ["Andy", 20, true];
console.log({ user1 });

const [ username, age ] = user1;
console.log({ username }, { age });

