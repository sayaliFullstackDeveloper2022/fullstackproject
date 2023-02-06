import React, { useEffect, useMemo, useState, useCallback } from "react";
// import { connect, useDispatch } from "react-redux";
// import { fetchCustomers, deleteCustomer } from "../actions/Actions";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import Header from "./Header";
import { deleteCustomer, fetchCustomers } from "../action_functions/actions";


const DisplayCustomer = () => {
    const [customers, setCustomers] = useState();
    const [flag,setflag]=useState(false)
    const navigate=useNavigate();
    const tempRef = useRef();
    const getData = async () => {
        const custData = await fetchCustomers();
        await setCustomers(() => custData.customerData);
        // console.log("DISPLAY in display customers:::", customers);
        // console.log("DISPLAY in display custData:::", custData);
    }

    useEffect(() => {
        getData();
        // return ()=>{}
    }, [flag])

    const [columnDefs, setColumnDefs] = useState([
        { field: 'id', headerClass: 'bg-dark text-white fs-6' },
        { field: 'name', headerClass: 'bg-dark text-white  fs-6' },
        { field: 'email', headerClass: 'bg-dark text-white  fs-6' },
        { field: 'contact', headerClass: 'bg-dark text-white  fs-6' },
        {
            field: "", headerClass: 'bg-dark text-white fs-5',
            cellRenderer: (params) => <>
                <button className="btn btn-outline-dark btn-lg p-0 px-1 mb-2" onClick={() => editHandler(params.data.id)} >Edit</button>
                <button className="btn btn-outline-dark btn-lg p-0 px-1 mb-2 mx-2" onClick={() => deleteHandler(params.data.id)} >Del</button></>

        }

    ]);
    const defaultColDef = useMemo(() => {
        return {
            editable: true,
        };
    }, []);

    const deleteHandler = async (val) => {
        const res=await deleteCustomer(val);
        setflag(true)
        // res?alert("Deleted"):alert("Failed to delete")
    }

    const editHandler = (p) => {
        navigate(`/update/${p}`)
    }

    const getRowId = useCallback((params) => {
        return params.data.id
    }, [])

    const getSearch = (nm) => {
        return console.log(customers.find(it => it.name === nm))
    }

    const onSearch = useCallback(() => {

        tempRef.current.api.setQuickFilter(
            document.getElementById('txt_search').value
        );
    }, []);

    return <>
        <Header />
        <div className="container">
            <div className=" row py-1 text-blue">
                <div className="m-auto text-center">
                    <div className="ag-theme-alpine mx-auto" style={{ height: '100vh', width: "100%" }} >
                        <div >
                            <div className="d-flex justify-content-center my-2">
                                <input
                                    className="px-2 py-1 fs-5"
                                    type="text"
                                    id="txt_search"
                                    placeholder="Search..."
                                    onInput={onSearch} />
                                {/* <button className="btn py-0 mx-2 mb-0 bg-primary fs-5 fw-bold" onClick={onSearchByName}>Search</button> */}
                            </div>
                            

                            <table ref={tempRef} className="w-100 text-center table table-hover">
                                <thead>
                                    <tr className="bg-info text-uppercase text-center ">
                                        <th className="fw-bold">Cid</th>
                                        <th className="fw-bold">Name</th>
                                        <th className="fw-bold">Contact</th>
                                        <th className="fw-bold">Email</th><th></th>
                                    </tr></thead>
                                <tbody>
                                    { 
                                        customers && customers.map((item) => {
                                            return (
                                                <tr key={item.id}>

                                                    <td><label className="border-0 w-25 text-center">{customers.indexOf(item) + 1} </label></td>
                                                    <td>{item.name}</td>
                                                    <td>{item.contact}</td>
                                                    <td>{item.email}</td>
                                                    <td><div>
                                                        <button className="btn bg-primary fw-bold " onClick={() => editHandler(item._id)} >Edit</button>
                                                        <button className="btn bg-primary fw-bold mx-3" onClick={() => deleteHandler(item._id)} >Del</button>
                                                    </div></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                            {/* { customers && 
                                <AgGridReact
                                    ref={tempRef}
                                    // getRowId={getRowId}
                                    rowSelection={'multiple'}
                                    rowData={customers}
                                    columnDefs={columnDefs}
                                ></AgGridReact>} */}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </>

}
// const mapStateToProps = (state) => {
//     return {
//         userData: state.Reducers,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchCustomers: () => dispatch(fetchCustomers()),
//     }
// }

export default DisplayCustomer;
// export default connect(mapStateToProps, mapDispatchToProps)(DisplayCustomer);