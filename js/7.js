const frutas = ["manzana", "kiwi", "pera", "uva"];
const conA = frutas.filter(f => f.includes("a"));
const resultadoJoin = conA.join(", ");
console.log(resultadoJoin); // "manzana, pera, uva"