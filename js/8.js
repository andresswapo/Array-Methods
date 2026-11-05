const aE8 = [4, 9, 2, 7];
const bE8 = [4, -1, 2];

const mayorA = aE8.reduce((max, n) => (n > max ? n : max), aE8[0]);
const everyA = aE8.every(n => n > 0);
console.log("a: mayor", mayorA, ", every:", everyA); 

const mayorB = bE8.reduce((max, n) => (n > max ? n : max), bE8[0]);
const everyB = bE8.every(n => n > 0);
console.log("b: mayor", mayorB, ", every:", everyB); 