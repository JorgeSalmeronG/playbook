const express = require('express')

const app =  express()

app.use(express.json())
const port= 3000

// HTTP METHODS
app.get('/v1/explorers', (req,res) => {
	console.log(`API explorers GET ALL requests ${new Date()}`)
	const explorer1 = {id: 1, name: "Carlo"}
	const explorer2 = {id: 2, name: "Carlo"}
	const explorer3 = {id: 3, name: "Jorge"}
	const explorer4 = {id: 4, name: "Luis"}
	const explorers = [explorer1, explorer2, explorer3,explorer4]
	res.status(200).json(explorers)
})

//GET que regresa un explorer por ID

app.get('/v1/explorers/:id', (req,res) => {
	console.log(`API explorers GET request ${new Date()}`)
	console.log(`Getting explorer with id ${req.params.id}`)
	const explorer = {id: 1, name: "Carlo"}
	res.status(200).json(explorer)
})

//POST crea un endpoin que se encarga de crear un explorer
app.post('/v1/explorers', (req, res) => {
	console.log(`API explorers POST request ${new Date()}`)
	const requestBody = req.body //Parámetros del cliente
	res.status(201).json({message: "Created"})
})

//PUT crea un endpoint que se encarga de actualizar un explorer
app.put('/v1/explorers/:id' , (req, res) => {
	console.log(`API explorers PUT request ${new Date()}`)
	console.log(`Update explorer with id ${req.params.id}`)
	const requestBody = req.body //Parámetros del cliente
	res.status(200).json({message : "Updated"})
})


app.listen(port, ()=> {
	console.log(`Example app listening on port ${port}`)
})
