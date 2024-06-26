import React from 'react'
import {useSelector} from "react-redux"
import Card from '../Card/Card';
import "./Home.css"
const Home = () => {
let Product=   useSelector((store)=>store.ProductSection.Product)
console.log(Product,"qqqq");
  return (
    <>
    <div class="   ">
        <img class='w-100' src='image.png1.png'/>
    </div>
 



<div class="container-fluid">
    <div class="row justify-content-between ms-2 md-mb-2 mt-4 ">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3  text-center  ">
            <div class="img-container size leff">
                <img class="img-fluid" src="one.png" alt="Adidas"/>
                <span class="d-block fw-bold fs-4">Adidas</span>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
            <div class="img-container size leff">
                <img class="img-fluid" src="two.png" alt="Nike"/>
                <span class="d-block fw-bold fs-4">Nike</span>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
            <div class="img-container size leff">
                <img class="img-fluid" src="three.png" alt="Bata"/>
                <span class="d-block fw-bold fs-4">Bata</span>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
            <div class="img-container size leff">
                <img class="img-fluid" src="one.png" alt="Service"/>
                <span class="d-block fw-bold fs-4">Service</span>
            </div>
        </div>
    </div>
</div>




    {/* <div class='container mt-5 d-flex flex-wrap  gap-2 justify-content-center'> */}
    <div class='container-fluid'>
  <div class='row'>
    <div class='col-lg-11 col-sm-12 col-md-12 mt-5 ms-md-3 d-flex flex-wrap gap-3 product  justify-content-center '>
      {
        Product.map((item) => 
          <div class='bbbbn'>
            <Card a2={item}></Card>
           </div>
        )
      }
    </div>
  </div>
</div>

         {/* </div> */}

         <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>



         
    </>
  )
}

export default Home

// second
{/* <div class='container-fluid'>
<div class='row'>
  <div class='col-lg-11 col-sm-12 col-md-12 mt-5 ms-md-3 d-flex flex-wrap gap-3 product  justify-content-center '>
    {
      Product.map((item) => 
        <div class='bbbbn'>
          <Card a2={item}></Card>
         </div>
      )
    }
  </div>
</div>
</div> */}





{/* <div class='container-fluid    ' >
  <div class='row  '>
    <div class='col-12  col-lg-12 col-md-6     mt-5  flex-wrap gap-4 justify-content-center'>

  

          {
            Product.map((item)=> 
              <Card a2={item}></Card>
              // console.log(item,"mm");
               
             )

          }
            </div>
  </div>
</div> */}


// container mt-5 d-flex flex-wrap  gap-2 justify-content-center

{/* <div class='container '>
<div class='row'>
<div class='d-flex   justify-content-center gap-4 mt-4 '>
  <div class='col-lg-3'>
  <div><img  class=' ' src='one.png'/><span class= ' d-block text-center fw-bold fs-4' style={{backgroundColor:'#f2f2f2'}}>Adidas</span></div>
  </div>
  <div class='col-lg-3 '>
  <div><img  src='two.png'/><span class= ' d-block text-center fw-bold fs-4' style={{backgroundColor:'#f2f2f2'}}>Nike</span></div>
  </div>
  <div class='col-lg-3 '>
  <div><img src='three.png'/><span class= ' d-block text-center fw-bold fs-4' style={{backgroundColor:'#f2f2f2'}}>Bata</span></div>
  </div>
  <div class='col-lg-3 '>
  <div><img src='one.png'/><span class= ' d-block text-center fw-bold fs-4' style={{backgroundColor:'#f2f2f2'}}>Service</span></div>
  </div>
   </div>
   
   
     
   
 
</div>
</div> */}