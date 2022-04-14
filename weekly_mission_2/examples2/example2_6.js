//Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta{
	constructor(name, age, stack){
	this.name = name,
	this.age = age,
	this.stack = stack,
	this.exercise_completed = 10,
	this.exercise_todo = 100

	}
	get getExeCompleted(){
		return this.exercise_completed
	}
}

console.log("Ejemplo 6: Getters para acceder a atributos del objeto")
const woopa = new Ajolonauta("Woopa",1,[])
console.log(woopa.getExeCompleted)

