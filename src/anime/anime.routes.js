const express = require('express');
const animeController = require('./anime.controller');

const router = express.Router();

router.post('/create-anime',animeController.create  );

router.post('/delete-anime',animeController.delete  );

module.exports = router ;