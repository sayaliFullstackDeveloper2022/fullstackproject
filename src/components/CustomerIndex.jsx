import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import DisplayCustomer from './DisplayCustomer';
import Login from "./Login";
import Header from "./Header";
import Logout from "./Logout";

const CustomerIndex = () => {
    // useEffect(()=>{localStorage.clear()},[])
    return (<>
        {/* // <h1>Hello World</h1> */}
        {/* <Header /> */}
        <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/new" element={<NewCustomer />} />
            <Route exact="true" path="/update/:cust_id" element={<NewCustomer />} />
            <Route exact="true" path="/display" element={<DisplayCustomer />} />
            <Route exact="true" path="/login" element={<Login />} />
            <Route exact="true" path="/logout" element={<Logout />} />
        </Routes>

        {/* <div className="container text-center">
            <footer className="footer text-center ">
                <span className="text-muted">All Rights Reserved 2023 @SRG</span>
            </footer>
        </div> */}
    </>)

}
export default CustomerIndex;