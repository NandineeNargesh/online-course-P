import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import AddAssignmentForm from './AddAssignmentForm';
import './LectureListItem.css';

const LectureListItem = ({ lecture, courseInstructorId }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [isLoadingAssignments, setIsLoadingAssignments] = useState(false);
  
  const isInstructor = user && user._id === courseInstructorId;

  const toggleOpen = async () => {
    setIsOpen(!isOpen);
    // Fetch assignments only the first time it's opened
    if (!isOpen && assignments.length === 0) {
      setIsLoadingAssignments(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${lecture.course}/lectures/${lecture._id}/assignments`);
        setAssignments(res.data.data);
      } catch (err) {
        console.error("Failed to fetch assignments");
      }
      setIsLoadingAssignments(false);
    }
  };

  const handleAssignmentAdded = (newAssignment) => {
    setAssignments([...assignments, newAssignment]);
  };

  return (
    <li className="lecture-list-item">
      <div className="lecture-header" onClick={toggleOpen}>
        <span className={`lecture-arrow ${isOpen ? 'open' : ''}`}>►</span>
        <span>{lecture.title}</span>
      </div>
      {isOpen && (
        <div className="lecture-content">
          <p>{lecture.content}</p>
          <div className="assignments-section">
            <h4>Assignments</h4>
            {isLoadingAssignments ? <p>Loading assignments...</p> : (
              assignments.length > 0 ? (
                <ul>
                  {assignments.map(assignment => (
                    <li key={assignment._id} className="assignment-item">{assignment.title}</li>
                  ))}
                </ul>
              ) : <p>No assignments for this lecture.</p>
            )}
            {isInstructor && <AddAssignmentForm courseId={lecture.course} lectureId={lecture._id} onAssignmentAdded={handleAssignmentAdded} />}
          </div>
        </div>
      )}
    </li>
  );
};

export default LectureListItem;