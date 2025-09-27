// backend/src/routes/authRoutes.js

const express = require('express');
// Ensure all functions are correctly imported
const { register, login, getMe, getMyCourses } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/my-courses', protect, getMyCourses); // This line likely had the error

module.exports = router;