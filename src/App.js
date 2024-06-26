import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Component/Header/Header';
import Main from "./Component/Main/Main"
import Login  from './Component/Login/Login';
import Home from './Component/Home/Home';
import Productdetail from './Component/Productdetail/Productdetail';
import Shoping from './Component/Shoping/Shoping';
import Signup from './Component/Signup/Signup';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Footer from './Component/Footer/Footer';
import Brand from './Component/Brand/Brand';
function App() {
let dispatch=useDispatch()

  useEffect(()=>{

    axios.post("/check-token",{
    token:localStorage.getItem("Maintoken3")
    }).then((resp)=>{
      // debugger
      dispatch({
        type:"USER-ADD-KARO",
        payload:resp.data 
      })
    })
  } 
   ,[])
  return (
  <>
   <BrowserRouter>
  <Header/>

   <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Select/:id' element={<Productdetail/>}></Route>
    <Route path='/Shopinglist' element={<Shoping/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/Brand/:dynamicbrand' element={<Brand/>}></Route>
   
    {/* <Route element={ <Productdetail/>}></Route> */}
   </Routes>
   <ToastContainer />
   </BrowserRouter>
   {/* <Login/> */}
   {/* <Home/> */}
   
  </>
  );
}

export default App;
