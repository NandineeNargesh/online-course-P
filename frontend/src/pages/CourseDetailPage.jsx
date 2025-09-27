// frontend/src/pages/CourseDetailPage.jsx

import React, { useState, useEffect, useContext } from 'react'; // Import useContext
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LectureListItem from '../components/LectureListItem'; // Import new component
import './CourseDetailPage.css';
import AuthContext from '../context/AuthContext'; 

const CourseDetailPage = () => {
  const { courseId } = useParams();
    const { token } = useContext(AuthContext); // Get token to see if user is logged in
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const handleEnroll = async () => {
    if (!token) {
      // If user is not logged in, redirect them to the login page
      navigate('/login');
      return;
    }
    try {
      await axios.post(`http://localhost:5000/api/courses/${courseId}/enroll`);
      alert('Successfully enrolled! You can now find this course in "My Learning".');
    } catch (err) {
      alert('Failed to enroll in course. You may already be enrolled.');
    }
  };
  useEffect(() => {
    const fetchCourseAndLectures = async () => {
      try {
        const courseRes = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        const lecturesRes = await axios.get(`http://localhost:5000/api/courses/${courseId}/lectures`);
        setCourse(courseRes.data.data);
        setLectures(lecturesRes.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch course details.');
        setLoading(false);
      }
    };
    fetchCourseAndLectures();
  }, [courseId]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">{error}</div>;
  if (!course) return <div className="container">Course not found.</div>;

  return (
    <div className="course-detail-page container">
      <div className="course-detail-header">
        <h1>{course.title}</h1>
        <p className="instructor">Created by {course.instructor.name}</p>
        <span className="category-badge">{course.category}</span>
      </div>

      <div className="course-detail-body">
        <div className="course-detail-main-content">
          <div className="course-detail-image">
            <img src={`https://picsum.photos/seed/${course._id}/800/450`} alt={course.title} />
          </div>
          <div className="course-detail-description">
            <h2>Description</h2>
            <p>{course.description}</p>
          </div>
        </div>

        <div className="course-detail-sidebar">
          <div className="course-price-cta">
            <span className="price">${course.price}</span>
           <button className="enroll-button" onClick={handleEnroll}>Enroll Now</button>

          </div>
          <div className="lectures-list">
            <h3>Course Content</h3>
            {lectures.length > 0 ? (
              <ul>
                {lectures.map(lecture => (
                  <LectureListItem 
                    key={lecture._id} 
                    lecture={lecture} 
                    courseInstructorId={course.instructor._id} 
                  />
                ))}
              </ul>
            ) : (
              <p>No lectures available yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;