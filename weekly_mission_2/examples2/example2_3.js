// Ejemplo 2: Instanciar un objeto con Atributos

class Student {
	constructor(name, age, subjects){
		this.name = name,
		this.age = age,
		this.subjects = subjects
	}
}
//Crear un objeto de la clase Student (A esto se le llama instanciación)
const LanaLane = new Student("Lana Lane", 12,['NodeJS','Python'])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(LanaLane)
