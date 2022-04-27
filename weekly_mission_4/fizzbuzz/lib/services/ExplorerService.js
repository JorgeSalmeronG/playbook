class ExplorerService{
	
    static filterByMission(explorers,mission){
        const explorersInMission = explorers.filter( (explorer) => explorer.mission == mission );
        return explorersInMission;
    }

    static getAmountOfExplorerByMission(explorers,mission){
		
        return this.filterByMission(explorers, mission).length;
    }

    static getExplorersUsernamesByMission(explorers,mission){

        let explorersInMission = this.filterByMission(explorers, mission);
        let usernamesInMission = explorersInMission.map( (explorer) => explorer.githubUsername);
        return usernamesInMission;

    }

}
module.exports = ExplorerService;
