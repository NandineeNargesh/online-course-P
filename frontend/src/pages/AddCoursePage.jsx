// frontend/src/pages/AddCoursePage.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import PageHeader from '../components/PageHeader';
import './AddCoursePage.css'; // 1. Use the new CSS file

const AddCoursePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [price, setPrice] = useState('');
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/courses', {
        title,
        description,
        category,
        price: Number(price),
      });
      navigate('/');
    } catch (err) {
    // Log the specific error message from the backend
    console.error('Backend validation error:', err.response.data);

    // We can also make the alert more helpful
    alert(`Failed to create course: ${err.response.data.error}`);
  }
};

  return (
    <div>
      <PageHeader title="Create a New Course" subtitle="Share your knowledge with the world." />

      {/* 2. Add new wrapper for styling */}
      <div className="add-course-page-wrapper">
        <div className="add-course-container">
          <form onSubmit={handleSubmit} className="add-course-form">
            <div className="form-group">
              <label htmlFor="title">Course Title</label>
              <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Course Description</label>
              <textarea id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="DevOps">DevOps</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price ($)</label>
              <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" />
            </div>
            <button type="submit" className="create-course-btn">Create Course</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;