const Reader = require("./../lib/utils/Reader");
const ExplorerService = require("./../lib/services/ExplorerService");
const FizzbuzzService = require("./../lib/services/FizzbuzzService");
const ExplorerController = require("./../lib/controllers/ExplorerController");


const explorers = Reader.readJsonFile("./explorers.json");
const mission = "node";

const qty = ExplorerService.getAmountOfExplorerByMission(explorers, mission );
const gitUsername = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
const fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorers,mission);

console.log(`Explorers: ${qty} \n Mission: ${mission} \n Gitusernames:\n ${gitUsername}`);

fizzbuzz.forEach((item) => console.log(`name: ${item.name}, mission: ${item.mission}, trick: ${item.trick}`));

const data = ExplorerController.getExplorerByMission(mission);
const user = ExplorerController.getExplorerUsernamesByMission(mission);
const num = ExplorerController.getExplorerAmountByMission(mission);
console.log(data);
console.log(user);
console.log(num);
