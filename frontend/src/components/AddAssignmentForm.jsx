import React, { useState } from 'react';
import axios from 'axios';
import './AddAssignmentForm.css';

const AddAssignmentForm = ({ courseId, lectureId, onAssignmentAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/courses/${courseId}/lectures/${lectureId}/assignments`,
        { title, description }
      );
      onAssignmentAdded(res.data.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Failed to add assignment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-lecture-form" style={{ marginTop: '15px', backgroundColor: '#fff' }}>
      <h5>Add New Assignment</h5>
      <div className="form-group">
        <label>Assignment Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows="3"></textarea>
      </div>
      <button type="submit" className="btn-add-lecture">Add Assignment</button>
    </form>
  );
};

export default AddAssignmentForm;