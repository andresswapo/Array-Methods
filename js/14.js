const precios = [120, 80, 250, 60, 90];
const sumaPrecios = precios.reduce((acc, p) => acc + p, 0);
const promedio = sumaPrecios / precios.length;
console.log("promedio:", promedio); // 120

const menoresPromedio = precios.filter(p => p < promedio);
console.log(menoresPromedio); // [80, 60, 90