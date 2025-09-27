const express = require('express');
// This line causes the error if 'lectureController' has a typo or doesn't exist
const { getLecturesForCourse, addLecture } = require('../controllers/lectureController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(getLecturesForCourse)
  .post(protect, authorize('instructor'), addLecture);
  
module.exports = router;