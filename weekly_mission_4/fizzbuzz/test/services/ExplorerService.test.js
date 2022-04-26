const ExplorerService = require('./../../lib/services/ExplorerService')

//const myObj =[{"name" : "explorer1",
//		"mission" : "node",
//	 	"score" : 1},
//		{"name" : "explorer3",
//		"mission": "java"
//		"score" : 3},
//		{ "name" : "explorer5",
//		"mission": "node",
//		"score" : 5},
//		{ "name" : "explorer15"
//		"mission" : "java",
//		"score" : 15}
//		]

describe("Unit tests for ExplorerService class", () =>{
	
	test("1) Test if FiterbyMission Method is correct ",() => {

		const explorers = [{ "name" : "explorer1", "mission" : "node"},
				{"name":"explorer2", "mission" : "java"}]
							
		const result = ExplorerService.filterByMission(explorers,"node")
		console.log(result)
		expect(result[0].name).toBe("explorer1")
	})

})
