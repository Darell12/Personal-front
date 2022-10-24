import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

const Login = () => {

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
    <h3>Sign In</h3>
    <div className="mb-3">
    <p className="forgot-password text-right">
      No estas resgistrado? <Link to="/regist">Registrarse</Link>
    </p>
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
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <Link to="/recovery">password?</Link>
    </p>
  </form>
  )
}

export default Login