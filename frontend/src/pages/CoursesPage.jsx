// frontend/src/pages/CoursesPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard'; // <-- 1. Import the component

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-container"> {/* <-- 2. Add a container for our grid */}
        {courses.length > 0 ? (
          courses.map((course) => (
            // 3. Use the CourseCard component for each course
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;