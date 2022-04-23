const User = require('./../models/User')

class UserService {
	static create(id, username, name){
		return new User(id, username, name, "Sin bio")
	}
	static getInfo(user){
		return [user.id, user.username, user.name, "Sin bio"]

	}
	static updateUserUsername(user1,newName){
		user1.username = newName
		return user1
	}
}
module.exports = UserService
