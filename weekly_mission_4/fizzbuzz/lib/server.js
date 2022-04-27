const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});


app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    response.json({mission: mission , quantity: ExplorerController.getExplorerAmountByMission(mission)});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    response.json(ExplorerController.getExplorerUsernamesByMission(mission));
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    response.json({score : number , trick : ExplorerController.getFizzbuzzNumber(number)});
});
