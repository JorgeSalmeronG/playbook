//Ejemplo 4. Objeto con Métodos

const pet = {
    name: "Tulio",
    sayHello: function(){
    	console.log(`${this.name} te saluda en español`)
    }//Esta es una función que se guarda como propiedad
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
