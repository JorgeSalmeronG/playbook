//Ejemplo 9: Herencia entre dos clases

class Developer {
	constructor(name,mainLang, stack){
		this.name = name,
		this.mainLang = mainLang,
		this.stack = stack
	}
	get getName(){
		return this.name
	}
}

console.log("Ejemplo 9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "JS", ["elixir","groovy","lisp"])
console.log(carloDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre

class DevJR extends Developer{}

const Jorge = new DevJR("Jorge", "HTML",["CSS","JS","Python"])
console.log(Jorge)
console.log(Jorge.getName)
