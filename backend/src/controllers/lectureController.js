// backend/src/controllers/lectureController.js

const Lecture = require('../models/Lecture');
const Course = require('../models/Course');

// @desc    Get all lectures for a specific course
// @route   GET /api/courses/:courseId/lectures
exports.getLecturesForCourse = async (req, res) => {
  try {
    const lectures = await Lecture.find({ course: req.params.courseId });
    res.status(200).json({ success: true, count: lectures.length, data: lectures });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Could not fetch lectures' });
  }
};
    
// @desc    Add a lecture to a course
// @route   POST /api/courses/:courseId/lectures
exports.addLecture = async (req, res) => {
  try {
    req.body.course = req.params.courseId; // Add courseId from URL to the body

    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }
    
    // Make sure logged-in user is the course instructor
    if (course.instructor.toString() !== req.user.id) {
        return res.status(401).json({ success: false, error: 'User not authorized to add a lecture to this course' });
    }

    const lecture = await Lecture.create(req.body);

    res.status(201).json({ success: true, data: lecture });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};