const a = [3, 7, 2];
const b = [10, 5];
const combinados = a.concat(b);
console.log(combinados); // [3, 7, 2, 10, 5]

const suma = combinados.reduce((acum, n) => acum + n, 0);
console.log(suma); // 27