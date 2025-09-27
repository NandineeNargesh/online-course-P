
import React, { useState } from 'react';
import Categories from '../components/Categories';
import CourseList from '../components/CourseList';
import './HomePage.css';
import PassionCategories from '../components/PassionCategories'; 
import heroImage from '../assets/hero-image.jpg'; // Make sure you have this image

const HeroSection = () => (
  <div className="hero-section-wrapper">
    <div className="hero-section container">
      <div className="hero-text">
        <p className="hero-subtitle">UNLOCK YOUR POTENTIAL</p>
        <h1>Learn Anytime, Anywhere, and Grow Your Skills</h1>
        <p className="hero-description">
          Explore thousands of hands-on courses from real-world experts. Join our global community and start your learning journey today.
        </p>
        <a href="/courses" className="hero-learn-more">Explore Courses →</a>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="People in a creative workshop" />
        <div className="play-button">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1316 12.0125L3.63583 0.47369C2.41378 -0.27411 0.817383 0.63519 0.817383 2.03889V25.9611C0.817383 27.3648 2.41378 28.2741 3.63583 27.5263L23.1316 15.9875C24.3435 15.2458 24.3435 12.7542 23.1316 12.0125Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
);
// This is our main Homepage component
const HomePage = () => {
  // 2. Add state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('View All');

  return (
    <div>
      <HeroSection />
<PassionCategories /> 
      <section className="courses-section">
        <div className="container">
          {/* 3. Pass the state and setter function to the Categories component */}
          <Categories 
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Discover our most popular and highly-rated courses to get you started.</p>
          
          {/* 4. Pass the selected category down to the CourseList component */}
          <CourseList category={selectedCategory} isHomepage={true} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;