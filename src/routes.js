const express = require('express');
const router = express.Router();

const SummonerController = require('./controllers/summonerController');

router.get('/summoner/:name', SummonerController.getSummonnerByName);
router.get('/summoner/matchhistory/:name', SummonerController.getMatchHistoryByName);

module.exports = router;
