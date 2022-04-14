//Ejemplo 5: Atributos con valores por default

class PullRequest {
	constructor(repo, title, lines_chg){
		this.repo = repo,
		this.title = title,
		this.lines_chg = lines_chg
		this.status = "OPEN",
		this.dateCreated = new Date() //Guarda la fecha actual en el objeto
	}
	getInfo(){
		return `This PR is the repo ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
	}
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR = new PullRequest("LaunchX","Mi 1er PR",100)
console.log(myPR.getInfo())



