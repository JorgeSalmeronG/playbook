//Ejemplo 6. Uso de map para convertir a Mayúsculas


const countries6 = ['Finland','Denmark','Sweden','Norway','Iceland']
const countriesShort = countries6.map((i) => i.toUpperCase().slice(0,3))

console.log("Ejemplo 6: Uso de Maps y slice")
console.log(countries6, countriesShort)
