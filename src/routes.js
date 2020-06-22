const express = require("express");
const router = express.Router();

const SummonerController = require("./controllers/summonerController");
const MatchController = require("./controllers/matchController");

router.get("/summoner/:name", SummonerController.getSummonnerByName);

router.get("/match/matchlist/:name", MatchController.getMatchHistoryByName);
router.get("/match/:matchId", MatchController.getMatchBymatchID);

module.exports = router;
