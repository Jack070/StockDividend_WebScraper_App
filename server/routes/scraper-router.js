const express = require("express");

const ScraperCtrl = require("../controllers/scraper-ctrl");

const router = express.Router()

router.get("/stocks", ScraperCtrl.getDividend)

module.exports = router