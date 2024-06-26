import React from 'react'

const CardBrand = ({a5}) => {
  return (
    <>
     <div className="card  " style={{ width: "15rem", height:"490px"}}>
  <img src= {a5.img1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title  "> {a5.title1}</h5>
    <p className="card-text h-50  ">
    {a5.title2}
    </p>
    <a href="#" className="btn btn-primary  px-3 py-2 ">
    ${a5.price}
    </a>
  </div>
</div>
    </>
  )
}

export default CardBrand