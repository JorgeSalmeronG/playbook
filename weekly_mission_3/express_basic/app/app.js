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

app.listen(port, () => {
	console.log(`example app listening on port ${port}`)
})
