import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'

function View() {
    return (
        <>
            <Row className='w-100'>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                <MovieCard/>
 
                </Col>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                <MovieCard/>
 
                </Col>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                <MovieCard/>
 
                </Col>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                <MovieCard/>
 
                </Col>
                <Col xs={12} md={6} lg={4} xl={3} className='justify-content-center align-items-center' >
                <MovieCard/>
 
                </Col>
                
            </Row>
        </>
    )
}

export default View