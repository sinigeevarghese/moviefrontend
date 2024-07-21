import React from 'react'
import View from '../components/View'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  return (
    <>
      <Header/>
      <div className="slider-container">
      <Slider {...settings} className='mb-5'>
        <div className='carosal1'>
          <div className='bg'>
              <h7 className='text-danger ms-5'>ACTION, ADVENTURE, FANTASY</h7>
              <h2 className='text-light ms-5 mt-2' style={{fontSize: '40px'}}>Indian</h2>
              <h6 className='text-light text-capitalize ms-5'>Releasing Date : 18 Jan 2024</h6>
              <a href="https://www.youtube.com/watch?v=545oW9Ohs0k"><FontAwesomeIcon icon={faCirclePlay} size="2xl" color='white' className='ms-5' /></a>
          </div>   
        </div>
        <div className='carosal2'>
          <div className='bg'>
              <h7 className='text-danger ms-5'>TRILLER, DRAMA</h7>
              <h2 className='text-light ms-5 mt-2' style={{fontSize: '40px'}}>Ulajh</h2>
              <h6 className='text-light text-capitalize ms-5'>Releasing Date : 02 Aug 2024</h6>
              <a href="https://www.youtube.com/watch?v=545oW9Ohs0k"><FontAwesomeIcon icon={faCirclePlay} size="2xl" color='white' className='ms-5' /></a>
          </div>   
        </div>
        <div className='carosal3'>
          <div className='bg'>
              <h7 className='text-danger ms-5'>ADVENTURE, FANTASY</h7>
              <h2 className='text-light ms-5 mt-2' style={{fontSize: '40px'}}>Vedaa</h2>
              <h6 className='text-light text-capitalize ms-5'>Releasing Date : 18 Sep 2024</h6>
              <a href="https://www.youtube.com/watch?v=545oW9Ohs0k"><FontAwesomeIcon icon={faCirclePlay} size="2xl" color='white' className='ms-5' /></a>
              
          </div>   
        </div>
      </Slider>
    </div>
     <div className='my-3'></div>
     <div>
     <View/>
     </div>
          
        
      <Footer/>
    </>
  )
}

export default Home