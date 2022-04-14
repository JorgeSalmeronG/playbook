//Ejemplo 8. Uso de -reduce-


const numbers9 = [1,2,3,4,5,6,7,8]
const result = numbers9.reduce((acc,item) => acc + item, 0)

console.log("Ejemplo 9. Uso de -reduce- para calcular sumatoria de elementos en lista")
console.log(numbers9, result)
