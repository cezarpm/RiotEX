const express = require("express");
const router = express.Router();

const SummonerController = require("./controllers/summonerController");
const MatchController = require("./controllers/matchController");

router.get("/summoner/:name", SummonerController.getSummonnerByName);

router.get("/match/:name", MatchController.getMatchHistoryByName);

module.exports = router;
