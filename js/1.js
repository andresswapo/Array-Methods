const numeros = [2, 5, 3, 8, 1];
const resultadoE1 = numeros.map(n => n * 3).filter(n => n > 10);
console.log(resultadoE1); // [15, 24]
console.log(numeros);     // [2, 5, 3, 8, 1]