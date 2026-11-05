const aE13 = [4, 7, 10, 3, 8];
const bE13 = [4, -2, 10];

console.log("a:", aE13.every(n => n > 0), ", pares:", aE13.filter(n => n % 2 === 0)); 
// a: true, pares [4, 10, 8]

console.log("b:", bE13.every(n => n > 0), ", pares:", bE13.filter(n => n % 2 === 0)); 
// b: false, pares [4, -2, 10]