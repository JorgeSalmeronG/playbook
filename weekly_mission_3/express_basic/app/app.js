const express = require('express')
//App de Express
const app = express()
//Puerto de la app: localhost:3000
const port = 3000

//path inicial, 

app.get('/',(req,res) => {
	res.send('Hello World!')
	})
//Inicializar la app

//Se agrega nueva ruta
app.get('/launchx', (req,res) => {
	res.send('Bienvenidos a launchx')
})

//Ruta que regresa un objeto
app.get('/explorersInNode', (req,res) => {
	const explorer = {name : "Jorge Salme", msg : "Hello"}
	res.send(explorer)
})

//Ruta que recibe un query params

app.get('/explorers/:explorer',(req,res) => {
	res.send(req.params)
})


app.listen(port, () => {
	console.log(`example app listening on port ${port}`)
})
