const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

	test("1). Create a new user using the UserService", () =>{
		const user = UserService.create(1,"jorgesalme","jorge")
		expect(user.username).toBe("jorgesalme")
		expect(user.name).toBe("jorge")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})

	test("2). Get all user data in a list", () => {
		const user = UserService.create(1, "jorgesalme","jorge")
		const userInfoList = UserService.getInfo(user)
		expect(userInfoList[0]).toBe(1)
		expect(userInfoList[1]).toBe("jorgesalme")
		expect(userInfoList[2]).toBe("jorge")
		expect(userInfoList[3]).toBe("Sin bio")
	})

	
})

