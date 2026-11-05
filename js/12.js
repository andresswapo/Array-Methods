const edades = [15, 32, 8, 21, 40];
edades.sort((a, b) => b - a);
console.log("ordenado:", edades); 

edades.pop(); 
console.log("sin la más joven:", edades); 

edades.push(19);
console.log("con la nueva:", edades); 