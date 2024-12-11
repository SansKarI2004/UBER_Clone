import React from 'react'

const LocationPanel = (props) => {
    const locations=[
        "24B, Near Maramay Nagar Cafe, Sheriyans Coding school",
        "24A, Near Maramay Nagar Cafe, Sheriyans Coding school",
        "24C, Near Maramay Nagar Cafe, Sheriyans Coding school",
        "24D, Near Maramay Nagar Cafe, Sheriyans Coding school",
    ]

  

  return (
    <div>
        {
            locations.map(function(elem){
            return  <div onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} className='flex items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8  w-12 flex items-center justify-center rounded-full'><i class="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem} </h4>
        </div>
            })
        }
        {/* this is just sample data */}
       
        
       

    </div>
  )
}



export default LocationPanel