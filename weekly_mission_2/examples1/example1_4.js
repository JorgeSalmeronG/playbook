//Ejemplo 4. Uso de map para recorrer una lista y crear una nueva lista
//*
//*const modifiedArray = arr.map((element,index) => element)


const numbers4 = [1,2,3,4,5]
//const numbersSqr = numbers4.map(function(num){return num*num})
const numbersSqr = numbers4.map((num) => {return num*num})
console.log("Ejemplo 4. Imprimiendo lista de elementos al Sqr")
console.log(numbersSqr)
