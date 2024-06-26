import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { toast } from 'react-toastify'

const Productdetail = () => {
  let params=useParams()
  let dispatch= useDispatch()
  let detail= useSelector((store)=>store.ProductSection.Product)
  console.log(detail,"4444444");
  let detailItem = detail.find(item => item.id === params.id);

  // let detailItem=detail.find((item)=>item.id === params.id)
  // let detailItem=detail.find((item)=>item.id === params.id)
 //  console.log(deail); 
  console.log(detailItem,"detal ali ");
  let[selectimg, setselectimg]=useState(detailItem.img1)
  let [isclicked, setclicked]=useState(false) 
  let [isclicked2, setclicked2]=useState(false) 
  let [isclicked3, setclicked3]=useState(false) 
  let [isclicked4, setclicked4]=useState(false) 
  let [isclicked5, setclicked5]=useState(false) 
  let [isclicked6, setclicked6]=useState(false) 
  let [isclicked7, setclicked7]=useState(false) 
  let [isclicked8, setclicked8]=useState(false) 
  let [isclicked9, setclicked9]=useState(false) 

  const imgclick=(img)=>{
    setselectimg(img)
}

const handleClick=()=>{
     setclicked(!isclicked)
}
const handleClick2=()=>{
    setclicked2(!isclicked2)
}
const handleClick3=()=>{
    setclicked3(!isclicked3)
}
const handleClick4=()=>{
    setclicked4(!isclicked4)
}
const handleClick5=()=>{
    setclicked5(!isclicked5)
}
const handleClick6=()=>{
    setclicked6(!isclicked6)
}
const handleClick7=()=>{
    setclicked7(!isclicked7)
}
const handleClick8=()=>{
    setclicked8(!isclicked8)
}
const handleClick9=()=>{
    setclicked9(!isclicked9)
}
  return (
    <>
     <div className='container '>
        <div className='row'>
            <div className='col-lg-6  mt-5   ' >
                <div  ><img src={detailItem.img1} className='pb-1   ' style={{width:"100px"}} alt="" 
                onClick={() => imgclick(detailItem.img1)}
                /></div>
                <div><img src={detailItem.img2}  className='pb-1  'style={{width:"100px"}} alt="" 
                onClick={() => imgclick(detailItem.img2)}
                /></div>
                <div > <img src={detailItem.img3}  className='pb-1  'style={{width:"100px"}} alt="" 
                 onClick={() => imgclick(detailItem.img3)}
                /></div>
                <div style={{width:"460px"}} ><img src={ selectimg} className='  ps-5   'style={{marginLeft:"60px",marginTop:"-314px",width:"460px"}}  alt="" /></div>
                <div></div>
            </div>
            <div className='col-lg-6 mt-5'>
                <h2>{detailItem.title1}</h2>
                <p className='fw-normal'>{detailItem.title2}</p>
                <p className='text-danger fw-bold'>Price:${detailItem.price}</p>
                <div className='d-flex gap-4'>
                    <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick}>UK 6</div>
                    <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked2 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick2}>UK 6.5</div>
                    <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked3 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick3}>UK 7</div>
                    {/* <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5' style={{height:"45px", width:"115px"}}>UK 6.5</div> */}
                    {/* <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5' style={{ height:"45px", width:"115px"}}>UK 7</div> */}
                </div>
                <div className='d-flex gap-4'>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked4 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick4}>UK 7.7</div>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked5 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick5}>UK 8</div>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked6 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick6}>UK 8.5</div>

                    {/* <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3'style={{ height:"45px", width:"115px"}}>UK 7.7</div>
                    <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 8</div>
                    <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 8.5</div> */}
                </div>
                <div className='d-flex gap-4'>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked7 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick7}>UK 8.5</div>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked8 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick8}>UK 8.5</div>
                <div className={ `py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3 ${isclicked9 ? 'bg-dark text-white' : 'text-dark'} `  } style={{ height:"45px", width:"115px",cursor: "pointer" }} onClick={handleClick9}>UK 8.5</div>

                    {/* <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 9</div>
                    <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 9.5</div>
                    <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 10</div> */}
                </div>
                <button to="/Cart"  className='btn  bg-dark text-white mt-3   py-2 rounded ' style={{marginLeft:"40px",padding:'0px 108px'}} onClick={()=>{
                    dispatch({type:"ADD-TO-CART",
                    payload:detailItem 
                    })
                    toast.success("item was add to cart")  
                } }  
                     >Add to Cart</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Productdetail






// let params=useParams()
//   let detail=useSelector((store)=>store.ProductSection). products
//   // let detailItem=detail.find((item)=>item.id === params.id)
//   let detailItem=detail.find((item)=>item.id === params.id)
//  //  console.log(deail); 
//   console.log(detailItem,"detal ");
//   let[selectimg, setselectimg]=useState(detailItem.img1)

//   const imgclick=(img)=>{
//     setselectimg(img)
// }
//   return (
//     <>
//     <h1>hello jj</h1>
//      <div className='container '>
//         <div className='row'>
//             <div className='col-lg-6  mt-5   ' >
//                 <div  ><img src={detailItem.img1} className='pb-1   ' style={{width:"100px"}} alt="" 
//                 onClick={() => imgclick(detailItem.img1)}
//                 /></div>
//                 <div><img src={detailItem.img2}  className='pb-1  'style={{width:"100px"}} alt="" 
//                 onClick={() => imgclick(detailItem.img2)}
//                 /></div>
//                 <div > <img src={detailItem.img3}  className='pb-1  'style={{width:"100px"}} alt="" 
//                  onClick={() => imgclick(detailItem.img3)}
//                 /></div>
//                 <div style={{width:"460px"}} ><img src={ selectimg} className='  ps-5   'style={{marginLeft:"60px",marginTop:"-314px",width:"460px"}}  alt="" /></div>
//                 <div></div>
//             </div>
//             <div className='col-lg-6 mt-5'>
//                 <h2>{detailItem.title1}</h2>
//                 <p className='fw-normal'>{detailItem.title2}</p>
//                 <p className='text-danger fw-bold'>Price:${detailItem.price}</p>
//                 <div className='d-flex gap-4'>
//                     <div className='py-1 px-4  border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3' style={{ height:"45px", width:"115px"}}>UK 6</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5' style={{height:"45px", width:"115px"}}>UK 6.5</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5' style={{ height:"45px", width:"115px"}}>UK 7</div>
//                 </div>
//                 <div className='d-flex gap-4'>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5 mb-3'style={{ height:"45px", width:"115px"}}>UK 7.7</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 8</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 8.5</div>
//                 </div>
//                 <div className='d-flex gap-4'>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 9</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 9.5</div>
//                     <div className=' py-1 px-4 border border-grey border-2 rounded text-dark fw-bold fs-5'style={{ height:"45px", width:"115px"}}>UK 10</div>
//                 </div>
//                 {/* <div className='container'>
//                     <div className='row'>
//                         <div className='col-lg-4'>

//                         <div>UK 6</div>
//                         <div>UK 6</div>
//                         <div>UK 6</div>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     </div>
    