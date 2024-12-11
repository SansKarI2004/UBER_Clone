import React from 'react'

const Waitfordriver = (props) => {
  return (
    <div>
    <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
           props.waitingForDriver(false)

        }}
    >
        <i className="text-3xl mb-3 text-gray-300 ri-arrow-down-wide-line"></i>
    </h5>

    <div className="text-center mt-5">
        <h3 className="text-2xl font-semibold mb-3">Meet at the Pickup Point</h3>
        <p className="text-gray-600">Your driver is on the way!</p>
        <p className="text-xl mt-2 font-bold">2 min</p>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center mt-5'>
        <div className="flex items-center gap-3">
            <img className='h-16 w-16 rounded-full' src="https://via.placeholder.com/150" alt="Driver" />
            <div>
                <h3 className="text-lg font-medium">Santh</h3>
                <p className="text-gray-600">KA15AK00-0</p>
                <p className="text-gray-600">White Suzuki S-Presso LXI</p>
                <p className="text-yellow-500 font-bold">4.9 ★</p>
            </div>
        </div>

        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2'> <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kaikondrahalli, Bengaluru</p>
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
            Driver Arrived
        </button>
    </div>
</div>
  )
}

export default Waitfordriver