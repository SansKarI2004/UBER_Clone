import React, { useState, useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error handling
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
    setIsLoading(true); // Start loading state

    const captainData = {
      email, // Use the state variable directly
      password, // Use the state variable directly
    };

    console.log('Request Data:', captainData); // Crucial logging

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainData
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain); // Save captain data in context
        localStorage.setItem('token', data.token); // Save token
        navigate('/captain-home'); // Redirect to captain's home page
      }
    } catch (err) {
      console.error('Login failed:', err);
      // Display error message from server or fallback
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 ml-8"
          src="https://example.com/your-image-url.png" // Update URL
          alt="Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2 font-semibold">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-slate-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button
            className="bg-black text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            disabled={isLoading} // Disable while loading
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </button>
        </form>

        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}

        <p>
          Join a fleet{' '}
          <Link to="/captain-signup" className="text-blue-500">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-black flex items-center justify-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
