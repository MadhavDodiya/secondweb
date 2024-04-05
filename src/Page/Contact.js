import Footer from './Footer';
import React from 'react'


export default function Contact(props) {
  return (
    <div>
      {/* contact page start */}

      <div className='bgimg6 mb-5'>


<div className='container'>
    <h1 className='text-center clr1 p-5' style={{fontSize:"90px"}}>CONTACT US
</h1>
</div>
</div>

<div className='container-fluid'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6' style={{height:"500px"}}>
        <div className='container'>
          <h1>GET IN TOUCH</h1>
          <form className='p-5'>
            <input type='text' placeholder='Name' style={{width:"100%",padding:"10px 10px",border:"1px solid gray",outline:"none"}}/>
            <input type='number' placeholder='Phone Number' style={{width:"100%",padding:"10px 10px",border:"1px solid gray",outline:"none"}} className='mt-4'/>
            <input type='email' placeholder='Email' style={{width:"100%",padding:"10px 10px",border:"1px solid gray",outline:"none"}} className='mt-4'/>
            <textarea typeof='massage' placeholder='Massage' style={{height:"100px",width:"100%",padding:"10px 10px",border:"1px solid gray",outline:"none"}} className='mt-4'></textarea>
            <button className='btn4 mt-3'>
              SEND NOW
            </button>
          </form>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='container'>
          <h1>TALK TO US</h1>
          <div className='container-fluid pt-5'>
            <div className='row'>
              <div className='col-md-2'>
                <button className='btn5'>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </button>
              </div>
              <div className='col-md-10'>
                <div>Email</div>
                  <h4 className='clr1'>something@tyler.com</h4>
                </div>
              </div>
            </div>

            <div className='container-fluid pt-4'>
            <div className='row'>
              <div className='col-md-2'>
                <button className='btn5'>
                <i class="fa fa-phone" aria-hidden="true"></i>
                </button>
              </div>
              <div className='col-md-10'>
                <div>PHONE NUMBER</div>
                  <h4 className='clr1'>202-555-0188</h4>
                </div>
              </div>
            </div>

            <div className='container-fluid pt-4'>
            <div className='row'>
              <div className='col-md-2'>
                <button className='btn5'>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                </button>
              </div>
              <div className='col-md-10'>
                <div>ADDRESS</div>
                  <h4 className='clr1'>2727 Ocean Road,<br/>Malibu, CA, 90264</h4>
                </div>
              </div>
            </div>
            
            <div className='container ps-5 pt-3'>
              <h4>Follow Us:</h4>
              <button className='btn6 m-2'><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className='btn6 m-2'><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className='btn6 m-2'><i class="fa fa-linkedin" aria-hidden="true"></i></button>
              <button className='btn6 m-2'><i class="fa fa-play" aria-hidden="true"></i></button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>


<Footer />





    </div>
  )
}
