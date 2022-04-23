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

	test("3). Update Username", () => {
		const user = UserService.create(1,"jorgesalme", "jorge")
		UserService.updateUserUsername(user,"jorges")
		expect(user.username).toBe("jorges")
	})

	test("4). Given a list of users give me the list of usernames", () => {
		const user1 = UserService.create(1,"jorgesalme1","jorge")
		const user2 = UserService.create(2,"jorgesalme2","jorge")
		const user3 = UserService.create(3,"jorgesalme3","jorge")
		const usernames = UserService.getAllUsernames([user1,user2,user3])
		expect(usernames).toContain("jorgesalme1")
		expect(usernames).toContain("jorgesalme2")
		expect(usernames).toContain("jorgesalme3")
	})
})

