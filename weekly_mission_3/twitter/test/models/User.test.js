const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

	test('1)Create an User object', () => {
		const user = new User(1, "carlogilmar","Carlo","bio")

		expect(user.id).toBe(1)
		expect(user.username).toBe("carlogilmar")
		expect(user.name).toBe("Carlo")
		expect(user.bio).toBe("bio")
		expect(user.dateCreated).not.toBeUndefined()
		expect(user.lastUpdated).not.toBeUndefined()
	});

	test('2)Add getters', () => {
		const user= new User(1,"carlogilmar","carlo","bio")
		expect(user.getUsername).toBe("carlogilmar")
		expect(user.getBio).toBe("bio")
		expect(user.getDateCreated).not.toBeUndefined()
		expect(user.getLastUpdated).not.toBeUndefined()
	})
})
