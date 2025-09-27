import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Header.css';

const Header = () => {
  // Make sure 'user' is being retrieved from the context here
  const { user, token, logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">E</Link>
          <nav className="main-nav">
            <Link to="/courses">All Courses</Link>
            {token && <Link to="/my-learning">My Learning</Link>}
            <Link to="/add-course">Instructor Dashboard</Link>
          </nav>
          <div className="header-actions">
            {user && <span className="user-role">Role: {user.role}</span>}
            {token ? (
              <>
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;