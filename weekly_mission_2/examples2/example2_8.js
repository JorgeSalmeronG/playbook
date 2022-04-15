//Ejemplo 8: Métodos static | Nos ayudan a escibir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox{
	static getTools(){
		return ["command line","git","Text Editor"]
	}
}
console.log("Ejemplo 8: Métodos Static")
console.log(Toolbox.getTools())
