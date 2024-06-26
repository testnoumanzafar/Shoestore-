import React from 'react'
import { Link } from 'react-router-dom';

const Card = ( {a2}) => {
    // console.log(a2,"hello");
  return (
    <>
    <Link to={"/Select/"+a2.id} className='text-decoration-none text-dark   '>
    <div className="card  " style={{ width: "18rem", height:"490px"}}>
  <img src= {a2.img1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title  "> {a2.title1}</h5>
    <p className="card-text h-50  ">
    {a2.title2}
    </p>
    <a href="#" className="btn btn-primary  px-3 py-2 ">
    ${a2.price}
    </a>
  </div>
</div>
</Link>
    </>
  )
}

export default Card