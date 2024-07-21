import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer, useToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getuserApi } from '../services/allApi';




function Auth() {
  const [inputuser, inputsetusers] = useState({
    email: "",
    password: ""
  })
  const [users, setusers] = useState([])
  const getusers = async()=>{
    const result = await getuserApi()
    setusers(result.data);
  }
  const handleUpload= async(e)=>{
    e.preventDefault() 
    const {email,password} = inputuser
    const user = users.map((item)=>item.email)
    const pass =  users.map((item)=>item.password)
    if( email==user && password==pass){
      alert("Successfully Logined")
    }
    else{
        alert("Something Went Wrong")
    }
  }
  useEffect(()=>{
    getusers()
  },[])
  return (
    <>
      <div style={{height:'100vh',alignItems:'center' }} className='mb-5 bg-dark'>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-5">
          <div className='card shadow p-3'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-lg-2'></div> 

              <div className='col lg-8'>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                <img src="https://play-lh.googleusercontent.com/OxQ8Ib-B7jIbeyPTWFn4VofRKulY7KSzzKjj1PZRR8JfCuU4MCfhQuSYm-hSYaD0KHE" style={{width:'40px',marginRight:'10px'}} alt="" />
           
                  <h1 className='fw-bolder text-light mt-2 text-dark'><i className='fa-solid fa-list-check me-2'></i>StreamIt</h1>
                  <h5 className='fw-bolder text-dark text-center'>sign up to your account</h5>
                  <Form className='my-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <label>Email</label>
                      <input className='form-control w-100' type="email"  onChange={(e)=>inputsetusers({...inputuser,email:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <label>Password</label>
                      <input className='form-control w-100' type="password"  onChange={(e)=>inputsetusers({...inputuser,password:e.target.value})} />
                    </Form.Group>
                    <div>
                      <button className='btn btn-danger mb-2' style={{marginLeft:'80px'}} onClick={handleUpload}><Link to={'/adminmovie'} style={{textDecoration:'none',color:'white'}}>Login</Link> </button> 
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-2"></div>
            </div>

          </div>
        </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      
        
<ToastContainer position="top-center"
autoClose={3000}
theme="colored"/>
      
    </>
  )
}

export default Auth