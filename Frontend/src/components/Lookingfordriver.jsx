import React from 'react'

const Lookingfordriver = (props) => {
  return (
    <div>
    <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
            props.setvehicleFound(false);
        }}
    >
        <i className="text-3xl mb-3 text-gray-300 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-3 ">Looking for driver </h3>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-File.png" alt="" />

        <div className='w-full mt-5'>

            <div className='flex items-center gap-5 p-3 border-b-2  '> <i className=" text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='tet-lg font-medium'> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Talab Ahemdabad</p>
                </div>
            </div>

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
       
    </div>


</div>
  )
}

export default Lookingfordriver