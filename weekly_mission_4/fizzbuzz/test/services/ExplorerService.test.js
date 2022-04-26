const ExplorerService = require('./../../lib/services/ExplorerService')


describe("Unit tests for ExplorerService class", () =>{
	
	test("1) Test if FiterbyMission Method is correct ",() => {

		const explorers = [{ "name" : "explorer1", "mission" : "node"},
		 		{"name":"explorer2", "mission" : "java"},
				{"name":"explorer3", "mission" : "node"}]

		const result = ExplorerService.filterByMission(explorers,"node")
		expect(result).toEqual([{ "name" : "explorer1", "mission" : "node"},
					{"name":"explorer3", "mission" : "node"}])
	});

	test("2) Test if AmountOfExplorers method is correct ", ()=> {

		const explorers = [{ "name" : "explorer1", "mission" : "node"},
				{"name":"explorer2", "mission" : "java"},
				{"name":"explorer3", "mission" : "node"},
				{"name":"explorer4", "mission" : "node"}]

		const result = ExplorerService.getAmountOfExplorerByMission(explorers, "node")
		expect(result).toBe(3)
	});

	test("3) Test if UsernamesByMission method is correct", () => {
	
		const explorers = [{ "name" : "explorer1", "mission" : "node", "githubUsername" : 'ajolonauta1'},
				{"name":"explorer2", "mission" : "java", "githubUsername" : 'ajolonauta2'},
				{"name":"explorer3", "mission" : "node", "githubUsername" : 'ajolonauta3'},
				{"name":"explorer4", "mission" : "node", "githubUsername" : 'ajolonauta4'}]

		const result = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
		expect(result).toEqual(["ajolonauta1","ajolonauta3","ajolonauta4"])
	})
})
