const User = require('./../models/User')

class UserService {
	static create(id, username, name){
		return new User(id, username, name, "Sin bio")
	}
	static getInfo(user){
		return [user.id, user.username, user.name, "Sin bio"]

	}
	static updateUserUsername(user,newName){
		user.username = newName
		return user
	}
	static getAllUsernames(users){
		const userUsernames = users.map( (item) => item.username)
		return userUsernames 
	}
}
module.exports = UserService
