// Uso de Filter


const countries7 = ['Finland','Denmark','Sweden','Norway','Iceland','Russia']
const countriesResult = countries7.filter((i) => i.includes('land'))

const countriesIA = countries7.filter((i) => i.endsWith('ia'))

console.log("Ejemplo 7: Uso de filter en lista 'incluyen -land-'")
console.log(countries7,countriesResult)

console.log("Ejemplo 7: Paises que terminan en -ia")
console.log(countriesIA)

