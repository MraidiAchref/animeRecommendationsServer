const express = require('express');
const profilesController = require('./profiles.controller');

const router = express.Router();

router.post('/create-profiles',profilesController.create  );

router.post('/delete-profiles',profilesController.delete  );



module.exports = router ;