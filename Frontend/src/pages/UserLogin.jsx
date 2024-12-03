import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


const userlogin = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [UserData,setUserData]=useState('')
  const { user, setUser } = useContext(UserContext); 
  const navigate=useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`, // Use login endpoint
        userData
      );
      if (response.status === 200) { // Check for success status
        const data = response.data;
        console.log('Login successful:', data); // Debug response
        setUser(data.user);
        localStorage.setItem('token', data.token); // Save token
        navigate('/landing'); // Navigate to the landing page
      } else {
        console.error('Failed to login user:', response.status);
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
        console.error('Error in setting up request:', error.message);
      }
    }
    setemail('');
    setpassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 ml-8' src="https://tse1.mm.bing.net/th?id=OIP.5e32h44tVwIw9Sb-OfCtawHaBj&pid=Api&P=0&h=180https://tse3.mm.bing.net/th?id=OIP.NrzoDmsiIjk5US-qXc_towHaEK&pid=Api&P=0&h=180" alt="" /> 
        <form onSubmit={(e)=>{
            submitHandler(e)

        }}>
            <h3 className='text-xl mb-2 font-semibold'>What's your email?</h3>
            <input 
             required
             value={email}
             onChange={(e)=>{
                setemail(e.target.value)
             }}
             className='bg-slate-200  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
               placeholder='email@example.com' />
            <h3 className='text-xl mb-2 font-semibold'>Enter Password</h3>
            <input 
             required
             value={password}
             onChange={(e)=>{
                setpassword(e.target.value)
             }}
             className='bg-slate-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
               placeholder='password' />
            <button
             className='bg-black text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Login</button>
            
        </form>
        <p>New here ?  <Link to='/signup' className=' text-blue-500 '>Create New Account</Link></p> 
       </div>
       <div>
        <Link to='/captain-login'
          className='bg-black flex items-center justify-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
       </div>
    </div>

  )
}

export default userlogin