//Ejemplo 11. Uso de Find para encontrar 1er coincidencia en lista


const ages = [24,22,19,25,32,35,18]
const kid = ages.find((item) => item < 20)

console.log("Ejemplo 11: Primer edad menos a 20 es: "+ kid)
