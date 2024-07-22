import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ViewTheater from '../components/ViewTheater';


function MovieDetails() {
  const location = useLocation();
  const MovieObject = location.state;
  console.log(MovieObject);
  return (
    <>
    <Header/>
    <div className='my-5 ms-5'> <Link to={'/'}><button className='btn btn-outline-danger shadow'><FontAwesomeIcon icon={faAnglesLeft} className='me-2' />Home</button></Link> </div>
       
    <div className="row w-100 mt-5">
       <div className="col-md-1"></div>
        <div className="col-md-4 d-flex justify-content-end mb-5 ">
            <img src={MovieObject.poster_img} width={'400px'} alt="" />
        </div>
        <div className="col-md-5">
        <h2 style={{marginTop:'10px',marginBottom:'10px'}}>{MovieObject.Title}</h2><hr />
        <button type="button" class="btn btn-secondary btn-sm my-3" fdprocessedid="gbu5c">{MovieObject.format}</button>
        <button type="button" class="btn btn-secondary btn-sm ms-1 my-3" fdprocessedid="gbu5c">{MovieObject.Language}</button>
        <button type="button" class="btn btn-secondary btn-sm ms-1 my-3" fdprocessedid="gbu5c">{MovieObject.Genres}</button>
        <p className=''><span style={{fontWeight:'900'}}>Duration : </span>{MovieObject.Duration} </p>
        <p className=''><span style={{fontWeight:'900'}}>Director : </span>{MovieObject.Director} </p>
        <p className=''><span style={{fontWeight:'900'}}>Cast : </span>{MovieObject.Actor} , {MovieObject.Actoress}, {MovieObject.Crew}</p>
        <p className=''> <span style={{fontWeight:'900'}}>Release Date : </span> {MovieObject.Date}</p>
        <p className=''> <span style={{fontWeight:'900'}}>Description : </span>{MovieObject.Description}</p>
        <div className='d-flex'>
        <button className='btn btn-info mt-3 p-3'>Watch Trailer</button>
        <Link to={'/'}  style={{textDecoration:'none'}}> <button className='btn btn-danger mt-3 ms-3 p-3'>Book Tickets</button></Link>
        </div>
        </div>
        <div className="col-md-1"></div>
    </div>
    <ViewTheater TheatreObject={MovieObject}/>
    <Footer/>
    </>
  )
}

export default MovieDetails