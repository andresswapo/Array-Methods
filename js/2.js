const palabras = ["sol", "luna", "mar", "estrella"];
palabras.reverse();
const encontradaE2 = palabras.find(p => p.length > 3);
console.log(palabras);      // ["estrella", "mar", "luna", "sol"]
console.log(encontradaE2);  // "estrella"