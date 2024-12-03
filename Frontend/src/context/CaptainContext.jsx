import React, { createContext, useContext, useState } from 'react';

// Create the CaptainContext
export const CaptainDataContext = createContext();



// Create the Provider component for CaptainContext
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email:'',
        password:'',
    }); // Initial state for captain
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
  
    const updateCaptain = (captainData) => {
      setCaptain(captainData);
    };
  
    const value = {
      captain,
      setCaptain,
      isLoading,
      setIsLoading,
      error,
      setError,
      updateCaptain,
    };
  
  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
};
