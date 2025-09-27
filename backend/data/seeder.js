const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: `${__dirname}/../.env` });

// Load models
const Course = require('../src/models/Course');
const User = require('../src/models/User'); // Corrected path

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

// Read JSON files
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/courses.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    // IMPORTANT: Find one instructor user to assign to all courses
    const instructor = await User.findOne({ role: 'instructor' });
    if (!instructor) {
      console.log('Please create an instructor user first!');
      process.exit();
    }

    // Add instructor ID to each course
    const coursesWithInstructor = courses.map(course => {
      return { ...course, instructor: instructor._id };
    });

    await Course.deleteMany(); // Clear existing courses
    await Course.create(coursesWithInstructor);
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Course.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}