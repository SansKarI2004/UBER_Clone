import React from 'react'

const Vehiclepanel = (props) => {
  return (
    <div>
         <h5
         className="p-3 text-center w-[93%] absolute top-0"
         onClick={() => {
          props.setVehiclePanel(false);
         
         }}
>
             <i className="text-3xl mb-3 text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
        <h3 className="text-2xl font-semibold mb-3 ">Choose a vehicle</h3>
      <div onClick={()=>{
        props.setVehiclePanel(false)
        props.setConfirmRidePanel(true);
      }}className="   active:border-black border-2 flex w-full items-center justify-between p-3 rounded-md mb-3">
        <img className='h-12' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-File.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-sm"> UBERGo <span><i className="ri-user-3-line"></i>3</span>  </h4>
          <h5 className="font-medium text-sm "> 2 mins away </h5>
          <p  className="font-medium text-sm  text-gray-500">Affordable, compact rides </p>
          </div>
         <h2 className="text-lg font-semibold"> $193</h2>
        </div>

        <div onClick={()=>{
        props.setVehiclePanel(false)
        props.setConfirmRidePanel(true);
      }} className="   active:border-black border-2 flex w-full items-center justify-between p-3 rounded-md mb-3">
        <img className='h-12' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-File.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-sm"> Moto <span><i className="ri-user-3-line"></i> 1</span>  </h4>
          <h5 className="font-medium text-sm "> 3 mins away </h5>
          <p  className="font-medium text-sm  text-gray-500">Affordable, motor rides </p>
          </div>
         <h2 className="text-lg font-semibold"> $193</h2>
        </div>

        <div onClick={()=>{
        props.setVehiclePanel(false)
        props.setConfirmRidePanel(true);
      }} className="   active:border-black border-2 flex w-full items-center justify-between p-3 rounded-md mb-3">
        <img className='h-12' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-File.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-sm"> UberAuto <span><i className="ri-user-3-line">3</i></span>  </h4>
          <h5 className="font-medium text-sm "> 5 mins away </h5>
          <p  className="font-medium text-sm  text-gray-500">Affordable, Auto rides </p>
          </div>
         <h2 className="text-lg font-semibold"> $13</h2>
        </div>

    </div>
  )
}

export default Vehiclepanel