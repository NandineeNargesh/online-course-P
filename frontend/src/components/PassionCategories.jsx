import React from 'react';
import { Link } from 'react-router-dom';
import './PassionCategories.css';


const PassionCategories = () => {
  const categoriesData = [
    { name: 'Web Development', count: 639 },
    { name: 'Data Science', count: 261 },
    { name: 'DevOps', count: 129 },
    { name: 'UI/UX Design', count: 975 }
  ];

  return (
    <section className="passion-categories-section">
      {/* Background Image */}
      <div className="passion-image passion-image-1">
        
      </div>

      <div className="container">
        <div className="passion-categories-grid">

          
          {/* Content Overlay */}
          <div className="passion-content">
            <p className="subtitle">CATEGORIES</p>
            <h2 className="section-title">Find Courses That <br /> Fit Your Passion</h2>
            <ul className="passion-category-list">
              {categoriesData.map((cat, index) => (
                <li key={index}>
                  <Link to={`/courses?category=${encodeURIComponent(cat.name)}`}>
                    {cat.name} ({cat.count}+)
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/courses" className="btn-all-categories">
              All Categories
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PassionCategories;
