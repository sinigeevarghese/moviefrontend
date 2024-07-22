import React from 'react'

function Schedule({schedule}) {
  return (
    <div>
         {schedule?.map((item)=>(
                    <button type="button" class="btn btn-outline-danger ms-2">{item.Show_Time}</button> 
                )
                )}
    </div>
  )
}

export default Schedule