const express = require("express");
const animeController = require("./anime.controller");
const {errorWrapper} = require("../lib/errorHandler");

const router = express.Router();

router.post("/create-anime", errorWrapper(animeController.create));

router.post("/delete-anime", errorWrapper(animeController.delete));

router.post("/update-anime", errorWrapper(animeController.update));

router.get("/read-anime/:anime_uid", errorWrapper(animeController.read));

router.get("/readAll-anime/:uid", errorWrapper(animeController.readAllByUid));

router.get("/readByrank-anime/ranked/:ranked", errorWrapper(animeController.readByRank));

module.exports = router;
