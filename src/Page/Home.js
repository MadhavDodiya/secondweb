import React from 'react'
import Footer from './Footer';


export default function Home(props) {
  return (
    <div>
      {/* Home page start */}

    <div className='bgimg1'>
  

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

<Footer />

    </div>
  )
}
