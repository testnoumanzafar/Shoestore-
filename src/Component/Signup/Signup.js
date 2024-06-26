import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import "./Signup.css"
const Signup = () => {

   let{  handleSubmit,register} =useForm()

   const Data= (data)=>{
    //    console.log(data);
       axios.post("/signup",data).then((result)=>{
        console.log(result.data,"anser");
       }).then((errror)=>{
        console.log(errror)
       })
   }
  return (
    <>
  <form onSubmit={handleSubmit(Data)} className= 'media col-11 col-sm-10 col-md-8 col-lg-6 shadow p-3 p-sm-5  mx-auto'>
            <h1 className='h1'>Signup to your account</h1>
            {/* <p>Dont have account? <Link to='/Signup'>Sign up here  </p> */}
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

export default Signup