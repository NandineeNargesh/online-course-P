// frontend/src/pages/AllCoursesPage.jsx

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CourseList from '../components/CourseList';
import Categories from '../components/Categories';

const AllCoursesPage = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('View All');

  return (
    <div>
      <PageHeader 
        title="Software Engineering Courses" 
        subtitle="Explore our catalog of expert-led courses in development, data science, and more." 
      />
      <section className="courses-section">
        <div className="container">
          <Categories 
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory} // Pass the state setter function
          />
          <CourseList category={selectedCategory} />
        </div>
      </section>
    </div>
  );
};

export default AllCoursesPage;