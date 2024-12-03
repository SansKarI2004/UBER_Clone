import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './pages/Home';
import UserLogin from './pages/userlogin';
import UserSignup from './pages/usersignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Landing from './pages/Landing';
import { UserProtectedWrapper } from './pages/userProtectedWrapper';
import Userlogout from './pages/Userlogout';


import CaptainHome from './pages/CaptainHome';

const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/signup' element={<UserSignup />} />
          <Route path='/captain-login' element={<CaptainLogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
         
          <Route path='/landing' element={
            <UserProtectedWrapper>
            <Landing/>
            </UserProtectedWrapper>

            }/>
             <Route path='/user/logout' element={
            <UserProtectedWrapper>
            <Userlogout/>
            </UserProtectedWrapper>

            }/>

            <Route path='/captain-home' element={<CaptainHome/>} />
        </Routes>
         
          

      </div>
   
  );
};

export default App;