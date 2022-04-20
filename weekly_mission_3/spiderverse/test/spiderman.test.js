const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
	test('1) Create an spiderman object ', () => {

		const andrewGarfield = new Spiderman("Spiderman", 31, "Andrew Garfield",2,"Sony")

		//Validación de código
		expect(andrewGarfield.name).toBe("Spiderman")
		expect(andrewGarfield.age).toBe(31)
		expect(andrewGarfield.actor).toBe("Andrew Garfield")
		expect(andrewGarfield.movies).toBe(2)
		expect(andrewGarfield.studio).toBe("Sony")
	})
})
