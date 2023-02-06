import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { addCustomer, fetchCustomers, updateCustomer } from "../action_functions/actions";
// import { connect, useSelector } from "react-redux";
// import { fetchCustomers, newCustomer, updateCustomer } from "../actions/Actions";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Timeout from "./Timeout";
// import { useForm } from 'react-hook-form'

const NewCusomer = (params) => {
    const [flag, setflag] = useState(true);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [header, setHeader] = useState("New Customer Details");
    const [all, setAll] = useState();
    const [data, setData] = useState({ name: "", email: "", contact: "" })
    // const temp = useSelector((state) => state.Reducers)
    let navigate = useNavigate();

    const { cust_id } = useParams();
    // let cust_id
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData(oldVal => {
            return {
                ...oldVal,
                [name]: value,
            }
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        const btn = e.target.innerHTML
        console.log(btn);
        console.log(e.target.innerText);
        if (btn === 'Add') {
            //     params.newCustomer(data);
            //     setData({ id: setUid(uid + 1), name: "", contact: "", email: "" })
            // }
            // console.log(JSON.stringify({  name: data.name, contact: Number.parseInt(data.contact), email: data.email }));
            try {
                const j = await addCustomer(data);

                if (j.success === false) alert("Enter Valid Details"); else alert("Added Successfully 👍")
            }
            catch (e) {
                console.error(e);
            }
        }

        else if (btn === 'Update') {
            try {
                const j = await updateCustomer(cust_id, data);

                if (j.success === false) alert("Enter Valid Details"); else alert("Added Successfully 👍")
            }
            catch (e) {
                console.error(e);
            }
            // params.updateCustomer(cust_id, data);
            setData({ name: "", contact: "", email: "" })

        }
        navigate("/display")
    }
    const getData = async () => {
        const custData = await fetchCustomers();
        await setAll(custData.customerData);
        setflag(false)

    };

    useEffect(() => {

        getData();
        // setflag(false)

        if (!localStorage.getItem("user_info"))
            navigate('/login')

        if (cust_id === undefined) {
            setHeader("New Customer Details")
            setData({ name: "", contact: "", email: "" })
        }
        else if (cust_id != undefined && !flag) {
            setHeader("Update Customer Details");
            let res = all && all.find((it) => it._id == cust_id)
            setData(res);
        }

    }, [flag,cust_id])

    return (<>
        <Header />
        <div className="container ">
            <div className=" row py-1">
                <div className="bg-dark text-white m-auto w-50 rounded-5 py-2">
                    <h2 className="text-capitalize text-center fw-bold text-light">{header}</h2><hr />
                    <form >
                        <div className="d-flex flex-column p-2 justify-content-center align-items-center fs-5">
                            {/* <div ><label >Cust Id :  {data.id}</label></div> */}
                            <div className="my-2">
                                <label className="">Name : </label>
                                <input type="text" onChange={changeHandler} value={data.name} name="name" />
                                {/* <input type="text" name="name"
                                    {...register("name", { required: true })} />
                                {errors.name && <p>Please check the Name</p>} */}
                            </div>

                            <div className="my-2"><label className="">Contact : </label>
                                <input type="number" onChange={changeHandler} value={data.contact} name="contact" required />
                            </div>

                            <div className="my-2"><label className="">Email : </label>
                                <input type="email" onChange={changeHandler} value={data.email} name="email" />
                                {/* <input type="email" name="email"
                                    {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                                {errors.password && <p>Please check the email</p>} */}
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-outline-light btn-lg px-4" onClick={submitHandler}>
                                    {cust_id == undefined ? "Add" : "Update"}

                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>)
}

// const mapStateToProps = (state) => {
//     return {
//         userData: state.Reducers,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {

//         fetchCustomers: () => dispatch(fetchCustomers()),
//         newCustomer: (customer) => dispatch(newCustomer(customer)),
//         // fetchSingleCustomer: (id) => dispatch(fetchSingleCustomer(id)),
//         updateCustomer: (id, customer) => dispatch(updateCustomer(id, customer))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewCusomer);
export default NewCusomer;