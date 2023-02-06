import React, { useEffect } from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
// import CustomerIndex from './CustomerIndex';
// import { Route, NavLink, Routes } from 'react-router-dom'
// import Home from "./Home";
// import NewCustomer from "./NewCustomer";
// import DisplayCustomer from './DisplayCustomer';
// import ProtectedRoute from '../../../util/ProtectedRoute';
import Header from './Header';
// import Footer from './Footer';
// import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../action_functions/actions';


const Login = () => {
    const navigate = useNavigate();
    // let history=hi
    // const history=useHistory();
    const [data, setData] = useState({ uname: "", password: "" })
    const loginHandler = async () => {
        const response = await login(data);
        // console.log(response.status)
        if(response.success) 
        {
            localStorage.setItem("user_info",JSON.stringify(data));
            // history.push("/login")
            navigate("/display")
        }
    }
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        localStorage.clear();
        
    }, [])

    return (
        <>
            {/* <Header/> */}
            {/* <section className="vh-100 gradient-custom"> */}
            <div className="container py-2 h-auto">


                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="text" id="typeUsername" className="form-control form-control-lg" name="uname" value={data.uname} onChange={changeHandler} />
                                        <label className="form-label">Username</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePassword" className="form-control form-control-lg" name="password" value={data.password} onChange={changeHandler} />
                                        <label className="form-label">Password</label>
                                    </div>

                                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-light btn-lg px-4" onClick={loginHandler}>Login</button>
                                    {/* <button className='btn' onClick={onLoginHandler}>Login</button> */}
                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                {/* <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}

            {/* <Footer/> */}
        </>
    )
}
export default Login
