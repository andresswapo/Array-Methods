const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const tresPrimeros = colores.slice(0, 3);
console.log(tresPrimeros); // ["rojo", "azul", "verde"]

const combinadosColores = tresPrimeros.concat(secundarios);
console.log(combinadosColores); // ["rojo", "azul", "verde", "naranja", "violeta"]

console.log("colores original:", colores);