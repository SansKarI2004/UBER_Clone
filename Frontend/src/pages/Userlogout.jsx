import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';



const Userlogout = async () => {
    const token=localStorage.getItem('token')
    const navigate= useNavigate()

    const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,{
            headers:{
                Authorization:'Bearer ${token}'
            }
        }
    ).then((response)=>{
        if(response.status==200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

  return (
    <div>Userlogout</div>
  )
}

export default Userlogout