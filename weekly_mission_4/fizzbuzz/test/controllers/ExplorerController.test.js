const ExplorerController = require("./../../lib/controllers/ExplorerController");


describe("Unit tests for ExplorerController class", () =>{
	
    test("1) Test if FiterbyMission Method is correct ",() => {

        const mission = "java" 

        const result = ExplorerController.getExplorerByMission(mission);
        expect(result[0].name).toEqual("Woopa6")
    });

    test("2) Test if AmountOfExplorers method is correct ", ()=> {

        const mission = "java" 

        const result = ExplorerController.getExplorerAmountByMission(mission);
        expect(result).toBe(5);
    });

    test("3) Test if UsernamesByMission method is correct", () => {
	
        const mission = "java" 

        const result = ExplorerController.getExplorerUsernamesByMission(mission)
        expect(result[0]).toEqual("ajolonauta6")
    });
});
