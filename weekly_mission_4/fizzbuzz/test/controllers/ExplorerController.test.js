const ExplorersController = require("./../../lib/controllers/ExplorersController");


describe("Unit tests for ExplorersController class", () =>{
	
    test("1) Test if FiterbyMission Method is correct ",() => {

        const mission = "java" 

        const result = ExplorersController.getExplorerByMission(mission);
        expect(result[0].name).toEqual("woopa6")
    });

    test("2) Test if AmountOfExplorers method is correct ", ()=> {

        const mission = "java" 

        const result = ExplorersController.getExplorerAmountByMission(mission);
        expect(result).toBe(5);
    });

    test("3) Test if UsernamesByMission method is correct", () => {
	
        const mission = "java" 

        const result = ExplorersController.getExplorersUsernamesByMission(mission)
        expect(result[0].username).toEqual("ajolonauta6")
    });
});
