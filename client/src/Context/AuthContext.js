import React, { useState, useContext, createContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const token =localStorage.getItem('token');
    console.log(token);
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
