// backend/src/routes/courseRoutes.js

const express = require('express');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollInCourse,
    searchCourses, 
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');

// Import the lecture router
const lectureRouter = require('./lectureRoutes');

const router = express.Router();

// This line connects the lecture routes
// It MUST be before the '/:id' routes
router.use('/:courseId/lectures', lectureRouter);

router.route('/')
  .get(getAllCourses)
  .post(protect, authorize('instructor'), createCourse);
router.route('/search').get(searchCourses);
router.route('/:id')
  .get(getCourseById)
  .put(protect, authorize('instructor'), updateCourse)
  .delete(protect, authorize('instructor'), deleteCourse);

router.route('/:courseId/enroll').post(protect, enrollInCourse);

module.exports = router;