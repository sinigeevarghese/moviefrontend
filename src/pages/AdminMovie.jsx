import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Moviecard from '../components/Moviecard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMovieApi } from '../services/allApi';
import '../bootstrap.min.css'
import HeaderAdmin from '../components/HeaderAdmin';




function AdminMovie() {
  const [deletevideotatus, setdeletevideostatus] = useState([])
  const [Movies, setMovies] = useState({
    Title:"",
    Duration:"",
    format:"",
    Genres:"",
    Language:"",
    Date:"",
    Actor:"",
    Actoress:"",
    Director:"",
    Crew:"",
    Description:"",
    poster_img:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setMovies({Title:"",Duration:"",format:"",Genres:"",Language:"",Date:"",Actor:"",Actoress:"",Director:"",Crew:"",Description:"",poster_img:""})
  }
  const handleShow = () => setShow(true);

  
  const handleUpload= async(e)=>{
    e.preventDefault() // in order to eliminate data lost
    const {Title,Duration,format,Genres,Language,Date,Actor,Actoress,Director,Crew,Description,poster_img} = Movies
    if(!Title || !Duration || !format || !Genres || !Language || !Date || !Actor || !Actoress || !Director || !Crew || !Description || !poster_img ){
      toast.info("Please Fill the Form Completly")
      console.log(e.target.value);
    }
    else{
      const result = await addMovieApi(Movies)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success("Movie Uploaded Successfully")
        // setaddStatus(result.data)
        handleClose()
      }
      else{
        toast.error("Something Went Wrong")
        handleClose()
      }

    }
  }
  useEffect(()=>{
    setMovies()
  },[deletevideotatus])
  return (
    <div>
    <HeaderAdmin/>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">

      <div className="container-fluid mt-5">
        <div className='d-flex justify-content-between shadow bg-secondary p-3'>
            <h3 className='text-primary'>Movies</h3>
            <button type="button" class="btn btn-warning" onClick={handleShow}>Add New</button>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 mt-2">< Moviecard setdeletevideostatus={setdeletevideostatus}/></div>
          <div className="col-md-1"></div>
        </div>
        {/* <div className=''>
            <Row className="mt-5 p-5">
                <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center' >
                  
                </Col>
            </Row>
        </div> */}

        <Modal show={show} onHide={handleClose} style={{width:'100%'}}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className=''>
             <Col sm={12} md={12}>
            <form className='p-3'>
              <div className="mb-3">
              <label>Title</label>
                <input type="text" className='form-control w-100' onChange={(e)=>setMovies({...Movies,Title:e.target.value})} />
              </div>
              <div className="mb-3">
              <label>Duration</label>
                <input type="text" className='form-control' onChange={(e)=>setMovies({...Movies,Duration:e.target.value})} />
              </div>
              <div className="mb-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Format</label>
                  <select class="form-control" id="exampleFormControlSelect1" placeholder="Format" onChange={(e)=>setMovies({...Movies,format:e.target.value})} >
                    <option>Select..</option>
                    <option>2D</option>
                    <option>3D</option>
                    <option>4Dx 3D</option>
                    <option>4Dx</option>
                  </select>
               </div>
              </div>
              <div className="mb-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Language</label>
                  <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>setMovies({...Movies,Language:e.target.value})} >
                    <option>Select..</option>
                    <option>Hindi</option>
                    <option>Malayalam</option>
                    <option>English</option>
                    <option>Thamil</option>
                  </select>
               </div>
              </div>
              <div className="mb-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Genre</label>
                  <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>setMovies({...Movies,Genres:e.target.value})} >
                    <option>Select..</option>
                    <option>Drama</option>
                    <option>triller</option>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Crime</option>
                    <option>Family</option>
                    <option>Romance</option>
                    <option>Horror</option>
                  </select>
               </div>
              </div>
              <div className="mb-3">
              <label>Release Date</label>
                <input type="Date"  className='form-control' onChange={(e)=>setMovies({...Movies,Date:e.target.value})} />
              </div>
              <div className="mb-3">
              <label>Actor</label>
                <input type="text"  className='form-control' onChange={(e)=>setMovies({...Movies,Actor:e.target.value})} />
              </div>
              <div className="mb-3">
              <label>Actoress</label>
                <input type="text"  className='form-control' onChange={(e)=>setMovies({...Movies,Actoress:e.target.value})} />
              </div>
              <div className="mb-3">
              <label>Director</label>
                <input type="text"  className='form-control' onChange={(e)=>setMovies({...Movies,Director:e.target.value})} />
              </div>
              <div className="mb-3">
              <label>Crew Members</label>
                <input type="text"  className='form-control' onChange={(e)=>setMovies({...Movies,Crew:e.target.value})} />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea placeholder='Overview' className='form-control' rows={'2'} onChange={(e)=>setMovies({...Movies,Description:e.target.value})}></textarea>
              </div>
              <div className="mb-3">
              <label>Poster Image</label>
              <input className='form-control' type="text" onChange={(e)=>setMovies({...Movies,poster_img:e.target.value})} />
              </div>
              
            </form> 
            </Col> 
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>
      

      </div>
      <div className="col-md-3"></div>
    </div>
    

    </div>
  )
}

export default AdminMovie