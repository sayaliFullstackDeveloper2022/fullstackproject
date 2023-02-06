import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchCustomers } from "../actions/Actions";
import Footer from "./Footer";
import Header from "./Header";


const Home=()=>{
// const dispatch= useDispatch();
    // useEffect(()=>
    // dispatch(fetchCustomers())  ,[]
    // )
    return(<>
    <Header/>
    <div className="my-5  m-auto container text-center">
    
    <h1>Welocome To Customer Portal</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores officia alias voluptate! Fugit, iste blanditiis odit eaque quibusdam dicta ab. Repellat quos unde velit expedita sit laboriosam, eaque perferendis voluptas?</p>
    </div>
    <Footer/>
    </>)
}
export default Home;