import React from 'react'
import { useLocation } from "react-router-dom"

    
   

const Forgot = () => {
    const sampleLocation = useLocation();


    const handleUbicacion = async (e) => {
     
        try{
          
          const res = await fetch(`http://localhost:4000${sampleLocation.pathname}`);
          const result = await res.json();
    
          console.log(result.mensaje)

        
      } catch(error){
        console.log(error);
      }
      }
   
      handleUbicacion();
  return (
    <div>Forgot</div>
  )
}

export default Forgot