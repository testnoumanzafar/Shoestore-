import React from 'react'
import { useSelector } from 'react-redux'

const Shoping = () => {
    let Shopl=useSelector((store)=>store.ProductSection.Shoping)
    console.log(Shopl,"lisc");
let total=0;
  return (
    <>
    
    <table style={{ width:"100%"}} className=' border border-1 mt-5'>
        <tr>
            <th>Title</th>
            <th>Price</th>
        </tr>
{
    Shopl.map((item)=>{
        total+=item.price
        return  <tr className=' border border-1'>
            <td>{item.title1}</td>
            <td>{item.price}</td>
        </tr>
    })
    

}
<tr>
    <th>Total Bill</th>
    <th>${total}</th>
</tr>

    </table>
    </>
  )
}

export default Shoping