import React from 'react'
import Thearecard from '../components/Thearecard'
import HeaderAdmin from '../components/HeaderAdmin'

function AdminSchedule() {
  return (
    <div>

      <HeaderAdmin/>
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">

      <div className="container-fluid mt-5">
        <div>
        <div className='d-flex justify-content-between shadow bg-secondary p-3'>
            <h3 className='text-primary'>Schedule Movie Show</h3>
            <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search"/>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit" fdprocessedid="if4ld">Search</button>
            </form>
        </div>
        
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 mt-2"><Thearecard /></div>
          <div className="col-md-1"></div>
        </div>
    </div>
      

      </div>
      <div className="col-md-3"></div>
    </div>



    </div>
  )
}

export default AdminSchedule