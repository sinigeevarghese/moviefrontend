import React from 'react'
import { Link } from 'react-router-dom'


function TheaterList() {
  return (
    <>
    <div style={{marginLeft:'300px',marginRight:'300px'}} className ="row bg-light p-3">
        <div className="col-md-6  "><h4 className='mt-3'>CinePolis:Centre Square Mall,Kochi </h4></div>
        <div className="col-md-6 "> <Link to={'/seatselection'}><button style={{height:'50px'}} className='btn text-success border border-primary pt-1 '>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 ms-3 me-3'>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 me-3'>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 '>11.0 AM <span className='d-flex'>Dolby 7.5</span></button></Link>
        </div>
    </div>
    <div style={{marginLeft:'300px',marginRight:'300px'}} className ="row bg-light p-3">
        <div className="col-md-6  "><h4 className='mt-3'>CinePolis:Centre Square Mall,Kochi </h4></div>
        <div className="col-md-6 "> <Link to={'/seatselection'}><button style={{height:'50px'}} className='btn text-success border border-primary pt-1 '>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 ms-3 me-3'>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 me-3'>11.0 AM <span className='d-flex'>Dolby 7.5</span></button>
        <button style={{height:'50px'}} className='btn text-success border border-primary pt-1 '>11.0 AM <span className='d-flex'>Dolby 7.5</span></button></Link>
        </div>
    </div>
    

    </>
  )
}

export default TheaterList