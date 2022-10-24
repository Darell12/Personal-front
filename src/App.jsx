import './App.css'
import Nav from './components/Nav'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Register from './Pages/Register';
import Login from './Pages/Login'
import Forgot from './Pages/Forgot'

function App() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>

      <MDBNavbar expand='lg' light bgColor='light'>

      <MDBContainer fluid>

        <MDBNavbarBrand href='#'>AQUI LOGO :P</MDBNavbarBrand>

        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>

          <MDBNavbarNav>

            <MDBNavbarItem>
            <Link to="/home">  <MDBNavbarLink active aria-current='page'> Home </MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link to="/Login"><MDBNavbarLink>Login</MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link to="/regist"><MDBNavbarLink>Registrarse</MDBNavbarLink></Link>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <Link to="/recovery"><MDBNavbarLink>Recuperar Contraseña</MDBNavbarLink></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
      </MDBNavbar>

    <Routes>

      <Route path="/home" element={""}/>
      <Route path="/regist" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/recovery" element={<Forgot/>} />

    </Routes>

  </BrowserRouter>
    </div>
  )
}

export default App
