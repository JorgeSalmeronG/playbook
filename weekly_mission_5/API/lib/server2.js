const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/',(req,res) => {
	res.json({message: 'alive'});
});

app.listen(port, () => {
	console.log(`Listen to requests on port ${port}`);
});
app.get('/v1/students/', async(req,res)=> {
	const allStudents = await prisma.student.findMany({});
	res.json(allStudents);
});
app.get('/v1/students/:id', async(req, res) => {
	const id = req.params.id;
	const student = await prisma.student.findUnique({where: {id: parseInt(id)}});
	res.json(student)
});
app.post('/v1/students/', async(req, res) => {
	const student = {
		name: req.body.name,
		lang: req.body.lang,
		missionCommander: req.body.missionCommander,
		enrollments : req.body.enrollments
	};
	const message = "Student Creado";
	await prisma.student.create({data:student});
	return res.json({message});
});
app.put('/v1/students/:id',async(req,res) => {
	const id = parseInt(req.params.id);
	await prisma.student.update({
		where: { id: id},
		data: { hasCertification: req.body.hasCertification }
	})
	return res.json({message: "Actualizado Correctamente"});
});
app.delete('/v1/students/:id',async(req,res) => {
	const id = parseInt(req.params.id);
	await prisma.student.delete({where: {id: id}});
	return res.json({message: "Eliminado Correctamente"});
});
