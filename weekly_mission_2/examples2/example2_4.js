// Ejemplo 4: Métodos en los objetos

class Repository {
	constructor(name, author, language, stars){
		this.name = name,
		this.author = author,
		this.language = language,
		this.stars = stars
		}
	getInfo(){
		return `Repository ${this.name} has ${this.stars} stars`
	}
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "jsalmeron", "js", 100)
console.log(myRepo.getInfo())

