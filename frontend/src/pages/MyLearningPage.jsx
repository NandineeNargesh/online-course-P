// frontend/src/pages/MyLearningPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import CourseCard from '../components/CourseCard';

const MyLearningPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/my-courses');
        setEnrolledCourses(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch enrolled courses', err);
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <PageHeader title="My Learning" subtitle="Continue your learning journey." />
      <div className="container" style={{ padding: '40px 20px' }}>
        {loading ? (
          <p>Loading your courses...</p>
        ) : (
          <div className="courses-container">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map(course => <CourseCard key={course._id} course={course} />)
            ) : (
              <p>You are not enrolled in any courses yet. Go explore!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearningPage;