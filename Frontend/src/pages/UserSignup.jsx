import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // Corrected destructuring

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );



      if (response.status === 201) {
        const data = response.data;
        console.log('Received Token:', data.token);
        setUser(data.user); // Set user data in context
        localStorage.setItem('token', data.token)
        navigate('/landing'); // Corrected navigation path
      } else {
        console.error('Failed to register user:', response.status);
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded with a status code outside of the 2xx range
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received from server:', error.request);
      } else {
        // Error setting up the request
        console.error('Error in setting up request:', error.message);
      }
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 ml-8"
          src="https://tse1.mm.bing.net/th?id=OIP.5e32h44tVwIw9Sb-OfCtawHaBj&pid=Api&P=0&h=180"
          alt="Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2 font-semibold">What's Your Name?</h3>
          <div className="flex gap-4">
            <input
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-slate-200 mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Firstname"
            />
            <input
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-slate-200 mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-xl mb-2 font-semibold">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-200 mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
          <button className="bg-black text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-signup"
          className="bg-black flex items-center justify-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg"
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
