//Ejemplo 13. Uso de -findindex- , este método regresa la posición de 1er coincidencia


const names13 = ['alfa', 'beta', 'gamma', 'delta', 'epsilon']
const result = names13.findIndex((item) => item.length > 4)

console.log(names13 + " |Ejemplo 13. El 1er elemento de mas de 4 letras esta en posición: "+ result)
