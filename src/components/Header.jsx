import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap';
function Header(insideDashBoard) {
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand >
           <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
           <div className='d-flex'>
           <img src="https://play-lh.googleusercontent.com/OxQ8Ib-B7jIbeyPTWFn4VofRKulY7KSzzKjj1PZRR8JfCuU4MCfhQuSYm-hSYaD0KHE" style={{width:'40px',marginRight:'10px'}} alt="" />
           <h3 className='text-light mt-2 ms-2 fw-bolder '>StreamIt</h3></div>
          
           </Link>
           
          </Navbar.Brand>
          <Link to={'/'}><button className='btn btn-primary  fs-5 fw-bolder' style={{marginLeft:'800px'}}>Home</button></Link>
          <button className='btn btn-primary fs-5 fw-bolder'> Movies</button>
{
  insideDashBoard&&
  <button className='btn btn-primary '><Link style={{textDecoration:'none',color:'white',fontSize:'larger',fontWeight:'bolder'}} to={'/login'}>Login</Link></button>
}
        </Container>
      </Navbar>
    </>
  )
}

export default Header