import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

export const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true); // Fixed state initialization

  useEffect(() => {
    const verifyCaptain = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.VITEE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in the Authorization header
            },
          }
        );

        setCaptain(response.data.captain); // Update captain context with profile data
        setIsLoading(false); // Stop loading after successful fetch
      } catch (error) {
        console.error('Error fetching captain profile:', error);
        localStorage.removeItem('token')
        navigate('/captain-login'); // Redirect to login if there's an error
      }
    };

    verifyCaptain();
  }, [token, navigate, setCaptain]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

