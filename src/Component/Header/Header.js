import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
  
  let User=useSelector((store)=>store.AuthSection.Userlog);
  let Order=useSelector((store)=>store.ProductSection.order)
  let logincheck=useSelector((store)=>store.AuthSection.Userlog)
  let dispatch=useDispatch()
  let  navigat=useNavigate()
  console.log(User,"mmmmmmmmmmmmm");
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white   "  style= {{  height:' 81px'}}  >
  <div className="container-fluid shadow-sm">
    <a className="navbar-brand ms-5 mt-1"   href="#">
     <img src='image.png' style={{width:'80px'}} />   
    </a>
    {/* style={{marginLeft:"4"}} */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {!logincheck? 
           <>  
        <li className="nav-item">
          <Link to='/Login'   className="nav-link active" aria-current="page" >
           Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/'  className="nav-link" href="#">
           admin panel
          </Link>
        </li>
        </> 
          :null}  
           {logincheck? 
          <>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Brands
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/Brand/all" href="#">
                All
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Brand/nike" href="#">
                Nike
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Brand/bata" href="#">
                Bata
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Brand/adadise" href="#">
                Adadise
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Brand/service" href="#">
                Service
              </Link>
            </li>
          </ul>
           
        </li>
        </>
            :null}  
     
      </ul>
      <form className="d-flex">
      
     
{logincheck?
<>
        <Link to="/Shopinglist">

<a   className="  position-relative" style={{marginRight:"39px"}}>
   <img src='Untitled.png' style={{marginLeft:"34px",width: "60px"}}></img>
  <span className="position-absolute mt-3 start-100 translate-middle badge rounded-pill bg-secondary">
    {Order} <span className="visually-hidden">unread messages</span>
  </span>
</a>
</Link >  

<div className='mt-2'>
      <a
        href="#"
        className='me-5 fw-normal text-dark text-decoration-none cursor-pointer'
        onClick={() => {
          dispatch({
            type: "USER-DELETE-KARRO"
          });
          navigat("/");
        }}
      >
        Logout
      </a>
    </div>
        
          
</>:null}
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Header