//Ejemplo 7: Setters para modificar los atributos del objeto


class MissionCommander{
	constructor(name, mission){
		this.name = name,
		this.mission = mission,
		this.students = 0,
		this.lives = 0
	}
	get getStudents(){
		return this.students
	}
	get getLives(){
		return this.lives
	}
	set setStudents(students){
		this.students = students
	}
	set setLives(lives){
		this.lives = lives
	}
}
console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const MCNode = new MissionCommander("Jorge","NodeJS")

console.log(MCNode.getStudents) //Default values
console.log(MCNode.getLives)

MCNode.setStudents = 120
MCNode.setLives = 5

console.log(MCNode.getStudents) //New values
console.log(MCNode.getLives)
