import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { registerAPI } from '../services/allAPI';

function Auth({ register }) {
  const isRegisterForm = register ? true : false
  const navigate=useNavigate()
 
  return (
    <>
      <div style={{ marginTop: '50px' }} className='d-flex justify-content-center align-items-center mb-5'>
        <div className='w-75 container'>
          {/* <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bolder' }}><i class='fa-solid fa-arrow-left'></i>Back to Home</Link> */}
          <div className='card shadow p-3 ' >
            <div className='row align-items-center'>
              <div className='col-lg-3'>
               

              </div>

              <div className='col lg-6'>
                <div className='d-flex align-items-center flex-column'>
                  <h1 className='fw-bolder text-light mt-2 text-dark'><i className='fa-solid fa-list-check me-2'></i>StreamIt</h1>
                  <h5 className='fw-bolder text-dark'>
                    {
                      isRegisterForm ? 'sign up to your account' : 'sign in to your account'
                    }
                  </h5>
                  <Form>
                    {
                      isRegisterForm &&
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="enter username" />
                      </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="email" placeholder="enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="password" placeholder="enter your password"  />
                    </Form.Group>
                    {
                      isRegisterForm ?
                        <div>
                          <button className='btn btn-dark mb-2 ' style={{marginLeft:'110px'}} >Register</button>
                          <p>Already have an account ? click here to <Link to={'/login'} style={{ textDecoration: 'none', color: 'green' }}>login</Link> </p>
                        </div> :
                        <div>
                          <button className='btn btn-dark mb-2' style={{marginLeft:'80px'}}>Login</button>
                          <p>New user ? click here to <Link to={'/register'} style={{ textDecoration: 'none', color: 'red' }}>register</Link> </p>
                        </div>
                    }
                  </Form>
                </div>
              </div>
              <div className="col-3"></div>
            </div>

          </div>
        </div>
<ToastContainer position="top-center"
autoClose={3000}
theme="colored"/>
      </div>
    </>
  )
}

export default Auth