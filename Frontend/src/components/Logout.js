import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally, you can clear other stored user data
    // localStorage.removeItem('userData');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
