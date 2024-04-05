import React from 'react'

import Footer from './Footer';

export default function About(props) {
  return (
    <div>
      {/* about page start */}

      <div className='bgimg3 mb-5'>
   

<div className='container'>
    <h1 className='text-center clr1 p-5' style={{fontSize:"90px"}}>WHO ARE WE?</h1>
</div>
</div>

<div className='container-fluid p-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <img src='img/Our-Mission-min.jpg' className='img-fluid'/>
            </div>

            <div className='col-md-6'>
                <div className='container'>
                <h2 className='pt-5'>OUR MISSION</h2>
                <p className='pt-3 pb-3'>Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.</p>

                <p className='pt-4'>I wish you the best of luck with your business, enjoy the adventure.</p>
                </div>
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


<Footer />



    </div>
  )
}
