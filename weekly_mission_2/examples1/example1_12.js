// Ejemplo 12: Uso de find en una lista de objetos


const scores12 = [
	{name: 'A', score: 95},
	{name: 'B', score: 80},
	{name: 'C', score: 50},
	{name: 'X', score: 85},
	{name: 'Y', score: 100}
]

const badJob = scores12.find((user) => user.score < 80)
console.log("Ejemplo 12. 1er usuario con score menor a 80: " + badJob.name)
