import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Register = () => {
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
    <form>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
      />
    </div>
    <div className="mb-3">
      <label>Last name</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered <Link to="/login">sign in?</Link>
    </p>
  </form>
  )
}

export default Register