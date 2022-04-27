const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission){
        let explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
        //return explorersByMission
    }
    static getExplorerUsernamesByMission(mission){
        let explorersByMission = this.getExplorerByMission(mission);
        return ExplorerService.getExplorersUsernamesByMission(explorersByMission, mission);
        //return explorersByUsername
    }
    static getExplorerAmountByMission(mission){
        let explorersByMission = this.getExplorerByMission(mission);
        return ExplorerService.getAmountOfExplorerByMission(explorersByMission, mission); 
    }

    static getFizzbuzzNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}
module.exports = ExplorerController;
