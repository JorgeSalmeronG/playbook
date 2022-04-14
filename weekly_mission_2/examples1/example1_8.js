//Ejemplo 8. Filtrar una lista por condicional

const scores = [ 
	{name: 'A', score: 95},
	{name: 'L', score: 98},
	{name: 'M', score: 80},
	{name: 'E', score: 50},
	{name: 'N', score: 85},
	{name: 'J', score: 100}
]

const scoresGood = scores.filter((item) => item.score > 80)
console.log("Ejemplo 8. Filtrado de elementos -Mayor que 80-")
console.log(scoresGood)
