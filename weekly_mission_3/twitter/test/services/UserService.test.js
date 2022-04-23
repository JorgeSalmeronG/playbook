const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

	test("1). Create a new user using the UserService", () =>{
		const user = UserService.create(1,"jorgesalme","jorge")
		expect(user.username).toBe("jorgesalme")
		expect(user.name).toBe("jorge")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})
})

