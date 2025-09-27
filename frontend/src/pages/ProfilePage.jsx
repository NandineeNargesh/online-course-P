// frontend/src/pages/ProfilePage.jsx

import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
import AuthContext from '../context/AuthContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useContext(AuthContext); // Get user from global state

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Your account details." />
      <div className="profile-container container">
        <div className="profile-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;