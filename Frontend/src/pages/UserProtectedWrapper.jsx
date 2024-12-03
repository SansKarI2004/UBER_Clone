import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


export const UserProtectedWrapper = ({
    children
}) => {


    const token =localStorage.getItem('token')
    console.log('Token:', token); 
    const navigate=useNavigate()
    useEffect(()=>{
        if(!token){
            navigate('/login')
            console.log('Token:', token);
        }

    },[token])
    
  return (
    <>
    {children}
    </>
  )
}

