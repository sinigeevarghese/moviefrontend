import React from 'react'
import View from '../components/View'
import AddMovie from '../components/AddMovie'

function Home() {
  return (
    <>
    <div>
      <AddMovie/>
    </div>
    
<h1 className='d-flex justify-content-center mt-5 '>Now Showing</h1>
      <div className="row w-100 p-5">
        <div className="col-md-12 ">
          <View/>
        </div>
      </div>
    </>
  )
}

export default Home