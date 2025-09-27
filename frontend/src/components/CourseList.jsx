// frontend/src/components/CourseList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

// It now receives a 'category' and an optional 'isHomepage' prop
const CourseList = ({ category, isHomepage }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        // Build the URL dynamically
        let url = 'http://localhost:5000/api/courses';
        let params = {};

        // If a specific category is selected, add it as a query parameter
        if (category && category !== 'View All') {
          params.category = category;
        }

        // If it's the homepage and 'View All' is selected, limit the results
        if (isHomepage && category === 'View All') {
          params.limit = 8;
        }

        const response = await axios.get(url, { params });
        setCourses(response.data.data);
      } catch (err) {
        setError('Failed to fetch courses.');
      }
      setLoading(false);
    };

    fetchCourses();
  }, [category, isHomepage]); // Re-run this effect when the category or isHomepage prop changes

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="courses-container">
      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))
      ) : (
        <p>No courses found for this category.</p>
      )}
    </div>
  );
};

export default CourseList;