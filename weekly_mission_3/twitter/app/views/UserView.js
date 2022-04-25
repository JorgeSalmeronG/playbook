const User = require ('./../services/UserService')

const UserView = class userView{


	static createUser(payload){
		if (payload === null ) {
			return { error : "payload no existe"}
		}
		if ( (!payload.username) || (!payload.name) || (!payload.id) ){
			return { error : "necesitan tener un valor válido" }
		}
	}
}
module.exports = UserView
