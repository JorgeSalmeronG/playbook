const ExplorerService = require("./ExplorerService");

class FizzbuzzService{
		
		
    static applyValidationInExplorer(explorers, mission){
		
        const explorersFiltered = ExplorerService.filterByMission(explorers, mission);

        explorersFiltered.map( (explorer) => {
            if (explorer.score % 3 == 0 && explorer.score % 5 == 0){ explorer.trick = "FIZZBUZZ";}
            else if (explorer.score % 3 == 0){ explorer.trick = "FIZZ";}
            else if (explorer.score % 5 == 0){ explorer.trick = "BUZZ";}
            else explorer.trick = explorer.score;
        });
        return explorersFiltered;
    }

    static applyValidationInNumber(number){
        if (number % 3 == 0 && number % 5 == 0){ return "FIZZBUZZ";}
        else if (number % 3 == 0){ return "FIZZ";}
        else if (number % 5 == 0){ return "BUZZ";}
        else return  number;
    }

}
module.exports = FizzbuzzService;
