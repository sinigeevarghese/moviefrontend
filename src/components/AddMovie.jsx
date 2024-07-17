import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function AddMovie() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
<div className="d-flex align-items-center " style={{paddingLeft:'150px',paddingTop:'50px'}}>
        <h3>Upload New Movie</h3>
        <button onClick={handleShow} className='btn  mb-2'><FontAwesomeIcon icon={faCloudArrowUp} size='2xl' /></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details</p>
          <form className='border  p-3 rounded border-primary'>
            <input type="text"placeholder='Movie Name'   className='form-control border border-primary' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"placeholder='Movie Poster'   className='form-control border border-primary mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text"placeholder='Movie Cast'   className='form-control border border-primary mt-3' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"placeholder='Movie Description'   className='form-control border border-primary mt-3' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"placeholder='Movie Release Date'   className='form-control border border-primary mt-3' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"placeholder='Url'  className='form-control border border-primary mt-3' onChange={(e)=> validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie