// backend/src/models/Lecture.js

const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a lecture title'],
  },
  content: {
    type: String,
    required: [true, 'Please add some content'],
  },
  videoUrl: {
    type: String,
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lecture', LectureSchema);