import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationPanel from "../components/LocationPanel";
import Vehiclepanel from "../components/Vehiclepanel";
import ConfirmedRide from "../components/ConfirmedRide";
import Lookingfordriver from "../components/lookingfordriver";
import Waitfordriver from "../components/Waitfordriver";


const Landing = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const formRef = useRef(null);
  const redPanelRef = useRef(null);
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const panelCloseRef= useRef(null)
  const [vehiclePanel,setVehiclePanel]=useState(false)
  const VehiclePanelRef= useRef(null)
  const VehicleFoundRef= useRef(null)

  const confirmRideRef= useRef(null)
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)

  const [vehicleFound,setvehicleFound]=useState(false)
  const waitingForDriverRef=useRef(null)
  const [waitingForDriver,setwaitingForDriver]=useState(false)

  useEffect(() => {
    if (panelOpen) {
      gsap.to(formRef.current, {
        top: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current,{
        opacity:1,
      })
      gsap.to(redPanelRef.current, {
        top: "30%",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(formRef.current, {
        top: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current,{
        opacity:0,
      })
      gsap.to(redPanelRef.current, {
        top: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [panelOpen]);

  const handleFocus = () => {
    setPanelOpen(true);
  };

  const handleBlur = () => {
    if (!panelOpen) return; // To prevent accidental animations
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };



  useEffect(()=>{
    if(vehiclePanel){
      gsap.to(VehiclePanelRef.current,{
        transform:'translateY(0)',
  
  
      })
    }
    else{
      gsap.to(VehiclePanelRef.current,{
        transform:'translateY(100%)',
  
  
      })

    }
   

  },[vehiclePanel])

  useEffect(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRideRef.current,{
        transform:'translateY(0)',
  
  
      })
    }
    else{
      gsap.to(confirmRideRef.current,{
        transform:'translateY(100%)',
  
  
      })

    }
   

  },[confirmRidePanel])

  useEffect(()=>{
    if(vehicleFound){
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(0)',
  
  
      })
    }
    else{
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(100%)',
  
  
      })

    }
   

  },[vehicleFound])

  useEffect(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)',
  
  
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)',
  
  
      })

    }
   

  },[waitingForDriver])
  



  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://blogapi.uber.com/wp-content/uploads/2022/08/Carbon_Maps_Figure-05.png"
        alt="Background"
        className="absolute h-full w-full object-cover"
      />

      {/* Uber Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
        className="absolute w-20 top-5 left-5"
      />

      {/* Form Container */}
      <div
        ref={formRef}
        className="absolute w-full bg-white p-5 mb-5 shadow-lg rounded-t-xl"
        style={{ top: "70%" }}
      >
        <h5  ref ={panelCloseRef} onClick={()=>{
          setPanelOpen(false)
        }} className="absolute right-6 top-6  opacity-0 text-2xl">
        <i class="ri-arrow-down-wide-line"></i>
           </h5>
        <h4 className="text-2xl font-semibold mb-4">Find a trip</h4>
        <form onSubmit={handleSubmit}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className="bg-gray-200 px-4 py-3 mb-3 w-full rounded-lg focus:outline-none"
            type="text"
            placeholder="Add a pick-up location"
          />
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
            className="bg-gray-200 px-4 py-3 mb-3 w-full rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter your destination"
          />
          {/* <button
            type="submit"
            className="w-full bg-black text-white  mb-5 py-3 rounded-lg font-semibold"
          >
            Confirm
          </button> */}
        </form>
      </div>

      {/* Red Panel */}
      <div
        ref={redPanelRef}
        className="absolute mt-10 w-full h-screen bg-white "
        style={{
          top: "100%",
          padding:20,
          
        }}
      >
        <LocationPanel panelOpen ={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={VehiclePanelRef} className="  flex-col  fixed w-full  translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <Vehiclepanel  setConfirmRidePanel ={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={confirmRideRef} className="  flex-col  fixed w-full  translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound}/>
        </div>

        <div ref={VehicleFoundRef} className="  flex-col  fixed w-full  translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <Lookingfordriver setvehicleFound={setvehicleFound}/>


        </div>
        
        <div ref={waitingForDriverRef} className="  flex-col  fixed w-full  translate-y-full z-10 bottom-0 bg-white px-3 py-6">
        <Waitfordriver waitingForDriver={waitingForDriver}/>


        </div>
      
      

    </div>
  );
};

export default Landing;
