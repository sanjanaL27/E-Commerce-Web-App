import React from 'react';
import { useAuth } from '../hooks/useAuth'; // This hook will be created later
import Logout from '../components/auth/Logout';

const ProfilePage = () => {
  const { user } = useAuth(); // This hook will provide user information

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <Logout />
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;
