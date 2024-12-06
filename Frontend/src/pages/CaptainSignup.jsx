import React, { useState } from 'react';

import { CaptainDataContext } from '../context/CaptainContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState(''); // Dropdown value

  const { captain, setCaptain } = React.useContext(CaptainDataContext); // Correct destructuring

  const submitHandler = async (e) => {
    e.preventDefault();
    // Set user and vehicle data
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },

    }
    // console.log(captainData)
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    // Clear input fields
    // setEmail('');
    // setPassword('');
    // setFirstname('');
    // setLastname('');
    // setVehicleColor('');
    // setVehiclePlate('');
    // setVehicleCapacity('');
    // setVehicleType('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 ml-8"
          src="https://tse1.mm.bing.net/th?id=OIP.5e32h44tVwIw9Sb-OfCtawHaBj&pid=Api&P=0&h=180"
          alt=""
        />
        <form onSubmit={submitHandler}>
          {/* User Information */}
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
              placeholder="Lastname"
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

          {/* Vehicle Information */}
          <h3 className="text-xl mb-2 font-semibold">Vehicle Information</h3>
          <div className="mb-4">
            <label className="block text-lg mb-1">Vehicle Color</label>
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-slate-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-1">Vehicle Number Plate</label>
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-slate-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Number Plate"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-1">Vehicle Capacity</label>
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-slate-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="number"
              min="1"
              placeholder="Vehicle Capacity (Number of Seats)"
            />
          </div>

          <div className="mb-7">
            <label className="block text-lg mb-1">Vehicle Type</label>
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-slate-200 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              <option value="">Select Vehicle Type</option>
              <option value="auto">Auto</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          <button className="bg-black text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/signup"
          className="bg-black flex items-center justify-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign up as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
