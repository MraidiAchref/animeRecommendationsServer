const express = require('express');
const profilesController = require('./profiles.controller');

const router = express.Router();

router.post('/create-profiles',profilesController.create  );

router.post('/delete-profiles',profilesController.delete  );


router.post('/update-profiles',profilesController.update  );

router.get('/read-profiles/profile/:profile',profilesController.read );

router.get('/readByGender-profiles/gender/:gender',profilesController.readAllByGender );



module.exports = router ;