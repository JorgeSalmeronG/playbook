const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
	try {
		const item1 = await prisma.student.upsert({
			where: { name: 'Jorge' },
			update:{},
			create: {
				name : 'Jorge',
				lang: 'nodejs',
				missionCommander: 'Carlo',
				enrollments: 2,
				hasCertification: true
			}
		});

		const item2 = await prisma.student.upsert({
			where: { name: 'Lana' },
			update:{},
			create: {
				name : 'Lana',
				lang: 'java',
				missionCommander: 'Fernanda',
				enrollments: 4,
				hasCertification: true
			}
		});
		const item3 = await prisma.student.upsert({
			where: { name: 'Pamela' },
			update:{},
			create: {
				name : 'Pamela',
				lang: 'HTML',
				missionCommander: 'Rodrigo',
				enrollments: 5,
				hasCertification: true
			}
		});
		const item4 = await prisma.student.upsert({
			where: { name: 'Bruno' },
			update:{},
			create: {
				name : 'Bruno',
				lang: 'perl',
				missionCommander: 'Richard',
				enrollments: 1,
				hasCertification: false 
			}
		});
		console.log("Create 4 students");
	}catch(e) {
		console.error(e);
		process.exit(1);
	}finally{
		await prisma.$disconnect();
	}

})();
