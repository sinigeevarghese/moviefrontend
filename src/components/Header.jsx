import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap';
function Header(insideDashBoard) {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand >
           <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>
           <img src="https://play-lh.googleusercontent.com/OxQ8Ib-B7jIbeyPTWFn4VofRKulY7KSzzKjj1PZRR8JfCuU4MCfhQuSYm-hSYaD0KHE" style={{width:'40px',marginRight:'10px'}} alt="" />
          StreamIt
           </Link>
          </Navbar.Brand>
{
  insideDashBoard&&
  <button className='btn text-light border'><Link to={'/login'}>Login</Link></button>
}
        </Container>
      </Navbar>
    </>
  )
}

export default Header