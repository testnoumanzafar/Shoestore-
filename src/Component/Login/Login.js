import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./Login.css"
const Login = () => {
 let{ handleSubmit,register } =useForm()
 let navigate=useNavigate()
 let  dispatch=  useDispatch()
 const Data=(data)=>{
  // console.log(data);

  axios.post("/login",data).then((resp)=>{
    // console.log(resp.data.mytoken,"login");
    if(resp.data){

        localStorage.setItem('Maintoken3',resp.data.newtoken)
    dispatch({
        type:"USER-ADD-KARO",
        payload:resp.data.Check 
    })

    toast.success("Login successfully ")
    navigate("/Home")
}

   }).then((errror)=>{
    console.log(errror)
   })

 }
    return (
    <>
     {/* col-11 col-sm-10 col-md-8 col-lg-6 shadow p-3 p-sm-5 mt-3 mt-5 mt-sm-5 mx-auto */}
   <form onSubmit={handleSubmit(Data)} className='media  col-11 col-sm-10 col-md-8 col-lg-6 shadow p-3 p-sm-5    mx-auto    '>
            <h1 className='h1'>Login to your account</h1>
            <p>Dont have account? <Link to='/Signup'>Sign up here</Link> </p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    {...register("password", { required: true })}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>

    </>
  )
}

export default Login