/*
Este ejemplo incluye dependencias. En tu línea de comando ve a este proyecto y ejecuta el comando `npm install` para descargar las dependencias, esto creará una carpeta node_modules
*/
class Pokemon {
  constructor(name, type, age){
    this.name = name
    this.type = type
    this.age = age
    this.attacks = []
  }

  get getAttacks(){
    return this.attacks
  }

  set setAttacks(attacks){
    return this.attacks = attacks
  }
}
module.exports = Pokemon
