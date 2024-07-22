import React, { useEffect, useState } from 'react'
import { deleteScheduleApi, getScheduleApi } from '../services/allApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function ScheduleCard({scheduledetails}) {
    const [schedule, setschedule] = useState({scheduledetails})
    const getschedule = async()=>
        {
        const result = await getScheduleApi()
        setschedule(result.data);
        }
    const handleDelete = async(id)=>
        {
        console.log(id);
        const result = await deleteScheduleApi(id)
        console.log(result);
        if(result.status>=200 && result.status<300){
        alert("Successfully removed")}
        }
    useEffect(()=>{
        getschedule()
      },[])
  return (
    <div className='row'>
    { schedule?.length>0?
        schedule?.map((item)=>(
                  <div className="col-md-4 col-sm-12">
                    <div className='d-flex align-items-left mt-3'>
                      <div className='p-2 border border-primary'>
                          <h5 className='text-primary'>{item.Show_Time}</h5>
                          <h5 className='text-primary'>{item.Movie_Name}</h5>
                      </div>
                      <button className="btn btn-primary rounded-0" fdprocessedid="w09pwr" onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                  </div>
           
         )
        )
         : 
         <p>No Schedule Yet</p>
        }
         </div>
   
  )
}

export default ScheduleCard