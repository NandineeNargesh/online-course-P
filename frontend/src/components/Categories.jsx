// frontend/src/components/Categories.jsx

import React from 'react';
import './Categories.css';

// It now receives props from its parent page
const Categories = ({ onSelectCategory, activeCategory }) => {
  const categories = ['View All', 'Web Development', 'Data Science', 'DevOps', 'UI/UX Design'];

  return (
    <div className="categories-section container">
      {categories.map(category => (
        <button 
          key={category} 
          className={category === activeCategory ? 'active' : ''}
          onClick={() => onSelectCategory(category)} // Call the function passed via props
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;