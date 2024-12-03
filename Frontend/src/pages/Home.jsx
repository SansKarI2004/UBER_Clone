import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className=' bg-cover bg-bottom bg-[url(https://i.pinimg.com/736x/c8/c1/f7/c8c1f70ead570d30e7bf2079250bfc10.jpg)] h-screen pt-8 flex w-full justify-between flex-col bg-red-400'>
        <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />    
        <div className='bg-white pb-7 px-4 py-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='./login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-4'>Continue</Link>

        </div>
        </div>
    </div>
  )
}

export default Home