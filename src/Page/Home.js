import React from 'react'

export default function Home(props) {
  return (
    <div>
      {/* Home page start */}

    <div className='bgimg1'>
    <nav className="navbar navbar-expand-sm">
  <div className="container">
    <a className="navbar-brand p-2" href="#"><img src='img/Logo-96x19.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item p-2 fs-5">
          <a className="nav-link clr1" href="#">HOME</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">SERVICE</a>
        </li>
        <li className="nav-item p-2 fs-5">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='container pt-5'>
    <h1 className='text-center text-success pt-5' style={{fontSize:"90px"}}>
        EARTH
    </h1>
    <h3 className='text-center display-5 pb-3'>ENDLESS POTENTIAL</h3>
    <center>
        <button className='btn1 fs-5'>
            EXPLORE
        </button>
    </center>
</div>
</div>

<div className='container-fluid p-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <img src='img/Service-1-min.jpg' className='img-fluid'/>
                <div className='container-fluid pt-3'>
                    <h4>Web Design</h4>
                    <p>Custom web design for small businesses, we help you capture new audiences and increase your sales.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <img src='img/Service-2-min.jpg' className='img-fluid'/>
                <div className='container-fluid pt-3'>
                    <h4>Graphic Design</h4>
                    <p>Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <img src='img/Service-3-min.jpg' className='img-fluid'/>
                <div className='container-fluid pt-3'>
                    <h4>Content Creation</h4>
                    <p>Want to attract people to your website?  You have to have the best content in the world. That’s what we do.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='container-fluid pt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='container pt-5'>
                    <h2 className='pt-5'>ABOUT US</h2>
                    <p className='pt-3'>I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.</p>
                </div>
            </div>

            <div className='col-md-6'>
                <img src='img/Our-Mission-min.jpg' className='img-fluid'/>
            </div>
        </div>
    </div>
</div>

<div className='bgimg2 mt-5'>
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
