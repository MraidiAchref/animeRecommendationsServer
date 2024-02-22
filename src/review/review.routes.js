const express = require('express');
const reviewsController = require('./review.controller');

const router = express.Router();

router.post('/create-reviews',reviewsController.create  );

router.post('/delete-reviews',reviewsController.delete  );


router.post('/update-reviews',reviewsController.update  );

router.get('/read-reviews/review/:review',reviewsController.read );

router.get('/readByGender-reviews/gender/:gender',reviewsController.readAllByUid );



module.exports = router ;