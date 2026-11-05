const productos = [
  { nombre: "Lápiz", precio: 50 },
  { nombre: "Cuaderno", precio: 120 },
  { nombre: "Libro", precio: 200 },
];

const idxE9 = productos.findIndex(p => p.precio > 100);
console.log(idxE9); 

const idxNadie = productos.findIndex(p => p.precio > 500);
console.log(idxNadie)