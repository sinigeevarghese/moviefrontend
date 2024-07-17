import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function MovieCard() {
  return (
    <>
    <Card style={{ width: '350px' }}>
      <Link to={'/moviedetails'}><Card.Img variant="top" src="https://i.pinimg.com/originals/3f/ff/d7/3fffd702d48852ede79ed71d04f36a2b.jpg"   width={'100%'} height={'450px'}/></Link>
      
      
    </Card>
    
    <div  style={{width:'320px'}}>
    <p className='fs-2 mt-3 fw-bolder d-flex justify-content-between'><Link to={'/moviedetails'} style={{textDecoration:'none'}}>Aavesham</Link> <button className='btn '><FontAwesomeIcon icon={faTrash} /></button></p>
    <p className='fw-bolder'><span style={{fontWeight:'900'}}>Cast:</span> Fahadh Faasil,Hipzster, Mithun Jai Shankar, Roshan Shanavas </p>
    </div>
    </>
  )
}

export default MovieCard