const MissionCommander = require('../app/missionCommander');
describe("Unit Tests for Mission Commander Class", () => {
	test('1 Create a mission commander object', () => {
		const myMC = new MissionCommander("Woopa") 
		expect(myMC.name).toBe("Woopa");
	})
})
