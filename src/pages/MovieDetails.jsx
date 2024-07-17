import React from 'react'
import { Link } from 'react-router-dom'

function MovieDetails() {
  return (
    <>
    <h2 style={{textAlign:'center',marginTop:'50px',marginBottom:'50px'}}>Aavesham</h2>
    <div className="row w-100 ">
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex justify-content-end mb-5 ">
            <img src="https://i.pinimg.com/originals/3f/ff/d7/3fffd702d48852ede79ed71d04f36a2b.jpg" width={'400px'} alt="" />
        </div>
        <div className="col-md-5 " >
        <p className='fw-bolder'><span style={{fontWeight:'900'}}>Cast:</span> Fahadh Faasil,Hipzster, Mithun Jai Shankar, Roshan Shanavas </p>
        <p className='fw-bolder'> <span style={{fontWeight:'900'}}>Release Date:</span> 11/04/2024</p>
        <p className='fw-bolder'> <span style={{fontWeight:'900'}}>Description: </span>Feeling humiliated, Aju seeks revenge and leads his friends to multiple bars in search of gangsters, eventually befriending Ranga, a prominent, eccentric and kind-hearted Malayali-Kannadiga gangster who dresses in all-white.</p>

        <button className='btn btn-info mt-3 w-25'>Watch Trailer</button>
       <Link to={'/buytickets'} style={{textDecoration:'none'}}> <button className='btn btn-danger d-flex w-25 mt-4 justify-content-center'>Book Tickets</button></Link>
        
        </div>
        <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default MovieDetails