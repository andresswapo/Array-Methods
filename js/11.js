const nombresE11 = ["ana", "luis", "valentina", "sara", "sebastian"];
const mayusculas = nombresE11.map(n => n.toUpperCase());
console.log(mayusculas); // 

const largoMasDe6 = mayusculas.find(n => n.length > 6);
console.log(largoMasDe6); 