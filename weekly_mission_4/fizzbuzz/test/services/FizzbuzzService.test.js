const FizzbuzzService = require('./../../lib/services/FizzbuzzService')


describe("Unit tests for FizzbuzzService class", () =>{
	

	test("1) Test if Validation works as expected with no multiples of 3 or 5", ()=> {

		const explorers = [{ "name" : "explorer1", "score" : 1}]
		const result = FizzbuzzService.applyValidationInExplorer(explorers)
		expect(result[0].trick).toBe(1)
	});

	test("2) Test if Validation works as expected with multiples of 3 only", ()=> {

		const explorers = [{ "name" : "explorer3", "score" : 3}]
		const result = FizzbuzzService.applyValidationInExplorer(explorers)
		expect(result[0].trick).toBe("FIZZ")
	});

	test("3) Test if Validation works as expected with multiples of 5 only", ()=> {

		const explorers = [{ "name" : "explorer5", "score" : 5}]
		const result = FizzbuzzService.applyValidationInExplorer(explorers)
		expect(result[0].trick).toBe("BUZZ")
	});

	test("4) Test if Validation works as expected with multiples of 3 & 5", ()=> {

		const explorers = [{ "name" : "explorer15", "score" : 15}]
		const result = FizzbuzzService.applyValidationInExplorer(explorers)
		expect(result[0].trick).toBe("FIZZBUZZ")
	});
})
