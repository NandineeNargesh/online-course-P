// src/controllers/courseController.js

const Course = require('../models/Course');

// @desc    Get all courses with filtering and pagination
// @route   GET /api/courses
exports.getAllCourses = async (req, res) => {
  try {
    // --- Filtering ---
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // --- Pagination ---
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 8; // Default to 8 courses per page
    const skip = (page - 1) * limit;

    // Execute the query
    const courses = await Course.find(queryObj) .populate('instructor', 'name') // <-- ADD THIS LINE
  .skip(skip)
  .limit(limit);

    // Get total number of documents for pagination info
    const totalDocuments = await Course.countDocuments(queryObj);

    res.status(200).json({
      success: true,
      count: courses.length,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalDocuments / limit),
      },
      data: courses,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
// @desc    Get courses enrolled by the user
// @route   GET /api/auth/my-courses
exports.getMyCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('enrolledCourses');
    res.status(200).json({ success: true, data: user.enrolledCourses });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};


// @desc    Get a single course by ID
// @route   GET /api/courses/:id
exports.getCourseById = async (req, res) => {
  try {
    // We add .populate() here to fetch the instructor's name
    const course = await Course.findById(req.params.id).populate('instructor', 'name');

    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};


// @desc    Search for courses
// @route   GET /api/courses/search?q=yourquery
exports.searchCourses = async (req, res) => {
  try {
    const query = req.query.q;
    const courses = await Course.find({
      // Search in both title and description
      $text: { $search: query }
    }).populate('instructor', 'name');

    res.status(200).json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Could not perform search' });
  }
};

// @desc    Create a new course
// @route   POST /api/courses
exports.createCourse = async (req, res) => {
  try {
    // This is the line that was missing or incorrect
    req.body.instructor = req.user.id;

    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
exports.enrollInCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const userId = req.user.id;

    // Add the course to the user's enrolledCourses array
    // $addToSet prevents duplicate entries
    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: courseId },
    });

    res.status(200).json({ success: true, data: 'Successfully enrolled' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};