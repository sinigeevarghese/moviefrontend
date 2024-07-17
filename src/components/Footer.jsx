import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div>
      <div className="row  bg-primary" style={{ height: '200px' }}>
        <div className="col-md-1"></div>
        <div className="col-md-2   pt-5 ">
        {/* <h4 className='mb-3 text-light'>Links</h4> */}
            <p ><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Home </Link></p>
            <p className='mt-3'><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Movies</Link></p>
            <p><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Login</Link></p>
        </div>

        <div className="col-md-3 mt-3 ">  
          <div className='text-secondary'>
 
          <p style={{ textAlign: 'justify' }} className='mt-4 text-secondary'>Theater Assistance</p>
          <p>Online Movie Theater Booking System</p>
          <p>Ph: 6548615</p>
          </div>
        </div>
        <div className="col-md-2 mt-5 d-flex p-1">
          <div className='text-secondary'>
            <p>Call us toll free:</p>
            <h3 className='text-secondary'>1200 695 54564</h3>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className='d-flex mt-4 justify-content-center'>
            <h3 className='text-secondary'>Subscribe To US</h3>
          </div>
          <div className='d-flex mt-4 d-flex text-secondary justify-content-center'>
            <FontAwesomeIcon icon={faInstagram} size="2xl" className='me-5' />
            <FontAwesomeIcon icon={faFacebook} size="2xl" className='me-5'/>
            <FontAwesomeIcon icon={faTwitter} size="2xl" className='me-5'/>
            <FontAwesomeIcon icon={faLinkedin}  size="2xl" />
          </div>
        </div>
        <div className="col-md-1"></div>

      </div>
    </div>
    </div>
  )
}

export default Footer