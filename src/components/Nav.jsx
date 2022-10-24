import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Forgot from '../Pages/Forgot'


const Nav = () => {



  return (

<>

<BrowserRouter>
    <nav>
        <Link to="/regist">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/recovery">Forgot Password</Link>
    </nav>
    <Routes>
      <Route path="/regist" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/recovery" element={<Forgot/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default Nav