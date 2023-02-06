import React, { useEffect } from 'react'
import { Route, NavLink, Routes } from 'react-router-dom'
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import DisplayCustomer from './DisplayCustomer';
import Login from './Login';


const Header = () => {
  
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="d-flex justify-content-center align-items-center bg-primary">
            { 
               localStorage.getItem("user_info") ?
                <>
                  <NavLink className="btn rounded-0 border-0 fw-bold fs-4 border-end border-dark" exact="true" to="/new">NEW CUSTOMER</NavLink>
                  <NavLink className="btn border-0 fw-bold fs-4" exact="true" to="/display">DISPLAY</NavLink>
                  <NavLink className="btn border-0 fw-bold fs-4 text-light" exact="true" to="/logout">LOGOUT</NavLink>
                </>
                 : <>
                  <NavLink className="btn rounded-0 border-0 fw-bold fs-4 border-end border-dark" exact="true" to="/signup">SIGN UP</NavLink>
                  <NavLink className="btn border-0 fw-bold fs-4" exact="true" to="/login">LOGIN</NavLink>
                 </>

             } 
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Header