import React from 'react'

export default function Service(props) {
  return (
    <div>
      {/* service page start */}
<div className='bgimg5 mb-5'>
<nav className="navbar navbar-expand-sm">
  <div className="container">
    <a className="navbar-brand p-2" href="#"><img src='img/Logo-96x19.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link clr1" href="#">SERVICE</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='container'>
    <h1 className='text-center clr1 p-5' style={{fontSize:"90px"}}>SERVICES</h1>
</div>
</div>

<div className='container-fluid pt-5 pb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='container pt-5 pb-3'>
                    <h2>Web Design</h2>
                    <p className='pt-5 pb-5'>We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
                    <button className='btn3'>
                        EXPLORE
                    </button>
                </div>
            </div>

            <div className='col-md-6'>
                <img src='img/Web-Design-1024x811.jpg' className='img-fluid'/>
            </div>
        </div>
    </div>
</div>

<div className='container-fluid pt-5 pb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <img src='img/Graphic-Design-1024x806.jpg' className='img-fluid'/>
            </div>

            <div className='col-md-6'>
            <div className='container pt-5 pb-3'>
                    <h2>Graphic Design</h2>
                    <p className='pt-5 pb-5'>We specialize in logos, merchandise and more. Anyone can create nice graphics but it’s much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
                    <button className='btn3'>
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='container-fluid pt-5 pb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='container pt-5 pb-3'>
                    <h2>Content Writing</h2>
                    <p className='pt-5 pb-5'>Want to attract people to your website? You have to have the best content in the world. Our content writers will create award willing content for you. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>
                    <button className='btn3'>
                        EXPLORE
                    </button>
                </div>
            </div>

            <div className='col-md-6'>
                <img src='img/Content-Writing-1024x811.jpg' className='img-fluid'/>
            </div>
        </div>
    </div>
</div>

<div className='bgimg4 mt-5'>
    <div className='container pt-5'>
        <center>
            <h1 className='clr1'>TALK TO US</h1>
            <p className='p-3 fs-5'>Have any questions? We are always open to talk about your business,<br/> new projects, creative opportunities and how we can help you.</p>
            <button className='btn2'>
                GET IN TOUCH
            </button>
        </center>
    </div>
</div>

<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-4'>
            <div className='container-fluid p-5'>
            <a className="nav-link d-inline p-2" href="#">HOME</a>           
            <a className="nav-link d-inline p-2" href="#">ABOUT</a>        
            <a className="nav-link d-inline p-2" href="#">SERVICE</a>       
            <a className="nav-link d-inline p-2" href="#">CONTACT</a>            
        </div>
        </div>

        <div className='col-md-4'>
            <div className='container-fluid p-5'>
            <center>
                <img src='img/Logo-96x19.png'/>
            </center>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='container-fluid p-5'>
                <p>©2022 Earth. All right reserved.</p>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}
