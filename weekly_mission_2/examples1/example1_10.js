//Ejemplo 10. Uso de -every- para validar elementos en una lista

const names10 = ['alfa', 'beta', 'gamma', 'delta' ]
const arrayStr = names10.every((name) => typeof name === 'string')
console.log(names10 + " |Ejemplo 10: Son strings: "+ arrayStr)
