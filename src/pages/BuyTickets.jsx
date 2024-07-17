import React from 'react'
import AddTheater from '../components/AddTheater'
import ViewTheater from '../components/ViewTheater'

function BuyTickets() {
  return (
    <>
   
   
    <div className=" m-5 p-5">
        <div className='ms-5 ps-5'>
        <h2 >Aavesham</h2>
        <div className='mt-3 '>
            <button className='btn btn-success me-3'>16</button>
            <button className='btn btn-success me-3'>17</button>
            <button className='btn btn-success'>18</button>
        </div>
        </div>
        <div>
          <AddTheater/>
        </div>
        
    </div>
    <div style={{marginTop:'-50px'}} className="row w-100 mb-5 pb-5">
        <div className="col-md-12 ">
          <ViewTheater/>
        </div>
      </div>
       

    </>
  )
}

export default BuyTickets