import React from 'react'
import { NavLink } from 'react-router-dom'

const Timeout = () => {
    return (
        <div className="container ">
            <div className="row ">
                <div className="d-flex flex-column justify-content-center align-items-center bg-danger">
                    <h1>Sorry...your session has expired</h1><br/>
                    <h2><NavLink className="btn fw-bold fs-4 text-light" exact="true" to="/login">Login Again</NavLink></h2>
                </div>
            </div>
        </div>
    )
}

export default Timeout