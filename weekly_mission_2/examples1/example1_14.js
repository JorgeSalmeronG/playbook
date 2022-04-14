//Ejemplo 14. Uso de -some- para validar lista. Si uno cumple la condición regresa "True"


const bools = [ true, true, false, true ]
const result = bools.some((a) => a === false)

console.log("Ejemplo 14: Alguno de los elemtos en el array es false: " + result)
