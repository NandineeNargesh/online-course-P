// frontend/src/components/CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const instructorName = course.instructor ? course.instructor.name : 'TBA';
  const studentCount = course.studentCount || Math.floor(Math.random() * 2000); // Placeholder data
  const rating = course.rating || (Math.random() * (5 - 4) + 4).toFixed(1); // Placeholder data


  return (
    <Link to={`/courses/${course._id}`} className="new-course-card-link">
      <div className="new-course-card">
        <div className="card-image-wrapper">
          <img src={`https://picsum.photos/seed/${course._id}/400/250`} alt={course.title} />
          <span className="card-badge">New Course</span>
        </div>
        <div className="card-content-wrapper">
          <p className="card-category">{course.category}</p>
          <h3 className="card-title">{course.title}</h3>
          <div className="card-meta">
            <span className="meta-item">⭐ {rating}</span>
            <span className="meta-item">👤 {studentCount}</span>
            <span className="card-price">${course.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;