import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
    return (
        <div>
            <Link to='/landing' className='fixed  h-10 w-10 right-2 top-2 bg-white items-center flex justify-center rounded-full '>
            <i class=" text-lg font-medium ri-home-7-line"></i>
            </Link>
            <div className='h-[30%] '>
                <img
                    src="https://www.wikihow.com/images/thumb/4/44/Add-a-Stop-During-a-Ride-on-Uber-Step-9.png/460px-Add-a-Stop-During-a-Ride-on-Uber-Step-9.png"
                    alt="Background"
                    className='h-[30%] w-full'

                />
            </div>


            <div className='h-1/2 p-4'>
                <div className='w-full mt-5  '>

                    
                    <div className='flex items-center gap-5 p-3 border-b-2  '> <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='tet-lg font-medium'> 562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Talab Ahemdabad</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2  '> <i className=" text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='tet-lg font-medium'> $143</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash </p>
                        </div>
                    </div>

                </div>

                <button
                    onClick={() => {
                        props.setDriverArrived(true);
                        props.setWaitingDriverPanel(false);
                    }}
                    className='w-full mt-5 p-4 rounded-md bg-green-500 font-semibold text-white'
                >
                    Make a Payement
                </button>

            </div>

        </div>
    )
}

export default Riding