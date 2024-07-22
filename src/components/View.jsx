import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import MovieCardFrontEnd from './MovieCardFrontEnd'
import { getMovieApi } from '../services/allApi'

function View() {
    const [Movies, setMovies] = useState([])
    const getmovie = async()=>{
        const result = await getMovieApi()
        setMovies(result.data);
      }
      useEffect(()=>{
        getmovie()
      },[])
    return (
        <>
        <div className='section1 mt-5' style={{marginTop: '6rem'}}>
            <h3 className='text-center'>Now Showing</h3>
            <Row className='mt-4'>
            { Movies?.length>0?
                  Movies?.map((item)=>(
               <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
               
                    <MovieCardFrontEnd MovieObject={item}/>
               
                </Col>
                 ))
                 :
                 <p>No Movies Yet</p>
                      }
            </Row>
        
         </div>
        </>
    )
}

export default View