import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div>
        <div>
      <div className="row bg-dark" style={{ height: 'auto' }}>
      
          <div className="row border-bottom">
            <div className="col-2"></div>
            <div className="col-8">
            <section className="d-flex align-items-left justify-content-center justify-content-lg-between p-4  bg-dark">
            <h7 className='text-light text-capitalize'>Need help? Contact our support team on</h7>
            <h7 className='text-light'> <FontAwesomeIcon icon={faHeadset} size="lg" color='white' className='me-2' /> 1200 695 54564</h7>
            </section>
            </div>
            <div className="col-2"></div>
          </div>
       
        <div className="col-md-2"></div>
        <div className="col-md-4 pt-5 ">
        {/* <h4 className='mb-3 text-light'>Links</h4> */}
            {/* <p ><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Home </Link></p>
            <p className='mt-3'><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Movies</Link></p>
            <p><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Login</Link></p> */}
            <div className='d-flex'>
           <img src="https://play-lh.googleusercontent.com/OxQ8Ib-B7jIbeyPTWFn4VofRKulY7KSzzKjj1PZRR8JfCuU4MCfhQuSYm-hSYaD0KHE" style={{width:'40px',marginRight:'10px'}} alt="" />
           <h3 className='text-light mt-2 ms-2 fw-bolder '>StreamIt</h3></div>
           <p style={{ textAlign: 'justify' }} className='mt-4 text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At veritatis rerum commodi rem recusandae odio officiis perferendis similique nihil dolores, odit accusantium amet repudiandae, ex doloremque consequuntur fugit adipisci. Iusto.</p>
          
        </div>

        <div className="col-md-2 d-flex align-items-center justify-content-center mt-3">  
          <div className='text-secondary'>
          <p><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Home </Link></p>
          <p className='mt-3'><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Assistence</Link></p>
            <p className='mt-3'><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Faq</Link></p>
            <p><Link className='text-secondary' style={{color:'',textDecoration:'none'}} to={'/'}>Login</Link></p>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-left justify-content-center flex-column mt-3">
          <p className='text-secondary'><FontAwesomeIcon icon={faInstagram} size="lg" className='me-1' /> Instagram</p>
          <p className='text-secondary'><FontAwesomeIcon icon={faFacebook} size="lg" className='me-1' /> Facebook</p>
          <p className='text-secondary'><FontAwesomeIcon icon={faTwitter} size="lg" className='me-1' /> Twitter</p>
          <p className='text-secondary'><FontAwesomeIcon icon={faLinkedin} size="lg" className='me-1' /> Linkedin</p>
        </div>
        <div className="col-md-2"></div>

      </div>
    </div>
    </div>
  )
}

export default Footer