import React from 'react';
import googleIcon from '../assets/google_icon.jpg'
const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // Redirect to the backend Google OAuth route
    // Make sure to create the google client id or else nothing will work
    // NK-Works (says): I have not worked on the backend for it so  i can't guarantee the working of the login functionality
    window.location.href = 'http://localhost:8080/auth/google';
  };

  return (

    <button
    onClick={() => handleGoogleLogin}
    className='w-full flex items-center justify-center bg-white border border-black/40 rounded-md my-4 p-4 cursor-pointer'
  >
    <img src={googleIcon} className='h-6 mr-2' alt="Google Icon" />
    Sign in with Google
  </button>
  );
};

export default GoogleLogin;
