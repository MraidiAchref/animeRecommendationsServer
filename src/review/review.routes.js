const express = require('express');
const reviewsController = require('./review.controller');
const {errorWrapper} = require('../lib/errorHandler') ;

const router = express.Router();

router.post('/create',errorWrapper(reviewsController.create)  );

router.post('/delete',errorWrapper(reviewsController.delete)  );


router.post('/update',errorWrapper(reviewsController.update)  );

router.get('/read/uid/:uid',errorWrapper(reviewsController.read) );




module.exports = router ;