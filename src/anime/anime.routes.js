const express = require('express');
const animeController = require('./anime.controller');

const router = express.Router();

router.post('/create-anime',animeController.create  );

router.post('/delete-anime',animeController.delete  );

router.post('/update-anime',animeController.update  );

router.get('/read-anime/:uid',animeController.read  );

module.exports = router ;