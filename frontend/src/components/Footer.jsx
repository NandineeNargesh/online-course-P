import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="new-main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>ABOUT US</h4>
            <p>Our mission is to provide high-quality, accessible online education to empower individuals to achieve their personal and professional goals.</p>
          </div>
          <div className="footer-col">
            <h4>FOR STUDENTS</h4>
            <ul>
              <li><a href="/courses">All Courses</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOR INSTRUCTORS</h4>
            <ul>
              <li><a href="/teach">Become an Instructor</a></li>
              <li><a href="#">Instructor Handbook</a></li>
              <li><a href="#">Course Creation Guide</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>COMMUNITY</h4>
            <ul>
              <li><a href="#">Community Forums</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events & Webinars</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>NEWSLETTER</h4>
            <p>Get the latest courses, news, and articles right in your inbox.</p>
             <form className="newsletter-form">
                <input type="email" placeholder="Your email address..." />
                <button type="submit">→</button>
              </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-logo">ECOURSES</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="footer-socials">
             <span>f</span> <span>t</span> <span>in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;