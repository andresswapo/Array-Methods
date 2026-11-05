const personas = [
  { nombre: "Sara", edad: 31 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 15 },
];

const hayMenores = personas.some(p => p.edad < 18);
console.log(hayMenores); // true

personas.sort((a, b) => a.edad - b.edad);
// Ordenado: Pedro (15), Luis (17), Ana (25), Sara (31)
console.log(personas);

const mayorEdadJoven = personas.find(p => p.edad >= 18);
console.log(mayorEdadJoven); // { nombre: "Ana", edad: 25 }