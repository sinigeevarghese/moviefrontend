import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function MovieCardFrontEnd({MovieObject}) {
    return (
        <>
         
        <Card style={{ width: '100%', border: '0px' }} className='p-4'>
          <Link to={'/moviedetails'} state={MovieObject}>
           <Card.Img variant="top" src={MovieObject.poster_img}   width={'100%'} height={'350px'}/>
          </Link>  
          <div className='d-flex justify-content-left'>
          <p className='fs-4 mt-3 fw-bold'>{MovieObject.Title}</p>
          </div>
        </Card>

        
       
       
        </>
      )
}

export default MovieCardFrontEnd