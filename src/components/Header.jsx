import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand >
           <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
           <div className='d-flex'>
           <img src="https://play-lh.googleusercontent.com/OxQ8Ib-B7jIbeyPTWFn4VofRKulY7KSzzKjj1PZRR8JfCuU4MCfhQuSYm-hSYaD0KHE" style={{width:'40px',marginRight:'10px'}} alt="" />
           <h3 className='text-light mt-2 ms-2 fw-bolder '>StreamIt</h3></div>
          
           </Link>
           
          </Navbar.Brand>
          {/* <Link to={'/'}><button className='btn btn-primary  fs-5 fw-bolder' style={{marginLeft:'800px'}}>Home</button></Link> */}
           <div className='icons ms-auto'>
            <FontAwesomeIcon icon={faInstagram} size="xl" color='red' className='me-3' />
            <FontAwesomeIcon icon={faFacebook} size="xl" color='red' className='me-3'/>
            <FontAwesomeIcon icon={faTwitter} size="xl" color='red' className='me-3'/>
           </div>
           <button className='btn btn-outline-danger'>
           <Link style={{textDecoration:'none',color:'white',fontSize:'18px',fontWeight:'400',justifyContent:'center'}} to={'/login'} className='p-2'>Login</Link>
           </button>

        </Container>
      </Navbar>
    </>
  )
}

export default Header