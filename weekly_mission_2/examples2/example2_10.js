//Ejemplo 10: Overriding Methods

class Explorer{
	constructor(name,username,mission){
		this.name = name,
		this.username = username,
		this.mission = mission
	}
	getName(){
		return `Explorer ${this.name}, username: ${this.username}`
	}
}
class Viajero extends Explorer{
	constructor(name, username, mission, cycle){
		super(name, username,mission) //SUPER nos ayudará a llamar al constructor padre
		this.cycle = cycle //Agregamos este atributo, que no es heredada del padre
	}
	getInfo(){
		let fullName = this.getName()
		return `${fullName}, Ciclo ${this.cycle}`
	}
}
const viajero1 = new Viajero("Jorge", "LaunchX", "NodeJS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getName()) //Método de la clase padre
console.log(viajero1.getInfo()) //Método de la clase hijo
