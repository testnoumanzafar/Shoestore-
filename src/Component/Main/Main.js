import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    
    <>
   <div class="container-fluid">
  <div class="row">
    <div class="col-lg-8 col-md-7 col-12 " style={{height: "500px"}}>
      <div class="d-flex flex-column align-items-center justify-content-center h-100 mt-5">
        <h2>Feat wear <span class="text-primary">Paradies</span></h2>
        <p class="text-center text-gray-500 mx-3 mx-md-5 mt-3 mb-3 fw-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, consectetur adipisicing elit.
        </p>
        <div>
          <button class="btn btn-dark text-white me-2  text-decoration-none" style={{borderRadius: '13px'}}><Link to='/Login' className="text-white text-decoration-none"> Login</Link></button>
          <button class="btn btn-secondary" style={{borderRadius: '13px'}}>Admin panel</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-5 col-12  ">
      <div className=' ' style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
     <img className='w-100 h-100' src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75 " alt="" />

      </div>
    </div>
  </div>
</div>

{/* <div class="container   ">
  <div class='row '>
    <div class="col-lg-8     col-md-10 col-sm-12 ">
        <div class='ms-md-n5'>
      <h2 class="" style={{marginLeft:"250px", marginTop:"230px"}} >Feat wear <span class="text-primary "  >Paradies</span> </h2>
 <p class=" ms-md-n5 ms-md-1 ms-5 mt-3 mb-3 fw-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, nfugit harum id necessitatibus odio quam quasi, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   </p>
 <div class=' 'style={{marginLeft:"200px"}}>
<button class='m-3  border-0   bg-dark  text-white ' style={{padding:"12px 17px",borderRadius:"13px"  }}>Log in</button>
<button class="ms-2  bg-secondary  border-0" style={{padding:"12px 17px",borderRadius:"13px"}}   >Admin panel</button>
</div>
</div>
    </div>



    <div class="col-lg-4 col-md-2 col-sm-12 ">
        <div class=''>
            <img  class='   ' style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}  src='https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75'></img>
        </div>
    </div>
    
  </div>
</div> */}


<footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">
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

export default Main




{/* <div class="container   ">
  <div class='row '>
    <div class="col-lg-8     col-md-10 col-sm-12 ">
        <div class='ms-md-n5'>
      <h2 class="" style={{marginLeft:"250px", marginTop:"230px"}} >Feat wear <span class="text-primary "  >Paradies</span> </h2>
 <p class=" ms-md-n5 ms-md-1 ms-5 mt-3 mb-3 fw-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, nfugit harum id necessitatibus odio quam quasi, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   </p>
 <div class=' 'style={{marginLeft:"200px"}}>
<button class='m-3  border-0   bg-dark  text-white ' style={{padding:"12px 17px",borderRadius:"13px"  }}>Log in</button>
<button class="ms-2  bg-secondary  border-0" style={{padding:"12px 17px",borderRadius:"13px"}}   >Admin panel</button>
</div>
</div>
    </div>



    <div class="col-lg-4 col-md-2 col-sm-12 ">
        <div class=''>
            <img  class='   ' style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}  src='https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75'></img>
        </div>
    </div>
    
  </div>
</div> */}



 