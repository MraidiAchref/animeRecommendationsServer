const express = require('express');
const reviewsController = require('./review.controller');

const router = express.Router();

router.post('/create',reviewsController.create  );

router.post('/delete',reviewsController.delete  );


router.post('/update',reviewsController.update  );

router.get('/read/uid/:uid',reviewsController.read );




module.exports = router ;