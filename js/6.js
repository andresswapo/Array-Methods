const nombres = ["Ana", "Luis", "Sara", "Pedro"];
const indiceSara = nombres.indexOf("Sara");

if (indiceSara !== -1) {
  nombres.splice(indiceSara, 1, "Camila");
}
console.log(nombres); 


const indiceJuan = nombres.indexOf("Juan");
if (indiceJuan !== -1) {
  nombres.splice(indiceJuan, 1, "Otro");
}
console.log("Con Juan (no existe):", nombres); 