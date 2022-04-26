const fs = require("fs")

class Reader{
	static readJsonFile(path){
		const rawData = fs.readFileSync(path)
		const explorers = JSON.parse(rawData)
	return explorers
	}
}

module.exports = Reader
