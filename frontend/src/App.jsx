import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllCoursesPage from './pages/AllCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddCoursePage from './pages/AddCoursePage'; // Import AddCoursePage
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import './App.css';
import MyLearningPage from './pages/MyLearningPage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage'; 
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
  <Route path="/my-learning" element={<ProtectedRoute><MyLearningPage /></ProtectedRoute>} />
       <Route path="/search" element={<SearchResultsPage />} />
<Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          {/* Protected Routes */}
          <Route 
            path="/add-course" 
            element={
              <ProtectedRoute>
                <AddCoursePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;