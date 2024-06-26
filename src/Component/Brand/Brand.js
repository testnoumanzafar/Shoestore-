// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import CardBrand from '../CardBrand/CardBrand'
// import CardBrand from '../CardBrand/CardBrand'
import "./Brand.css"
const Brand = () => {
    let params=useParams()
    let dispatch=useDispatch()
// let 
let  products = useSelector((store)=>store.ProductSection.Product)

console.log(products, "nouman zafr");

    let search_value=useSelector((store)=>store.ProductSection).Searched
    console.log(search_value);
  return (
    <>
    <div className='p-3 w-75 mx-auto'>
    <input  className='w-100 px-3 py-2 bg-success border-0 rounded text-white fs-5'
          placeholder='Search here...'
          style={{ '--bs-placeholder-color':  'red'  }}
          type="search"
          onChange={(e)=>{
            dispatch({
                type:"SEARCHED_VALUE",
                payload: e.target.value
            })
            
          }}
          />
    </div>

<div/>
<div className='row m-0' >
        <div className=' mt-5  col-12 col-sm-2 center'  >
          <div className='row m-0'>
            <Link to="/Brand/all">
              <button type="button" className='btn btn-secondary mb-2 col-4 col-sm-12'>All Brands</button>
            </Link>
            <Link to="/Brand/bata">
              <button type="button" className='btn btn-secondary mb-2 col-4 col-sm-12'>Bata</button>
            </Link>
            <Link to="/Brand/nike">
              <button type="button" class="btn btn-secondary mb-2 col-4 col-sm-12">Nike</button>
            </Link>
            <Link to="/Brand/service">
              <button type="button" class="btn btn-secondary mb-2 col-4 col-sm-12 ">Service</button>
            </Link>
          </div>
        </div>
        {/* map */}
        <div className='mt-5 col-10  d-flex gap-2 justify-content-around  flex-wrap'>
        {
             products
             .filter((bnn)=>bnn.brand ===params.dynamicbrand  || params.dynamicbrand==="all" )
             .filter((abc)=>abc.title1.includes(search_value.toUpperCase()))
             .map((prod)=>{
                return <CardBrand a5={prod}></CardBrand>
             })
            // products.map((produ) => {
            //   return <CardBrand a3={produ}></CardBrand>
            // })
          }
        </div>
      </div>
    </>
  )
}

export default Brand