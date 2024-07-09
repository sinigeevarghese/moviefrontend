import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook, faTwitter,} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
    <div className="container ">
      <div className="row">
     <div className="d-flex mt-4 justify-content-around ">
             <FontAwesomeIcon icon={faInstagram} size='2x1'/>
             <FontAwesomeIcon icon={faFacebook} size='2x1' />
             <FontAwesomeIcon icon={faTwitter} size='2x1'/>
            
             </div>
             <div className='text-center p-4' >
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          StreamIt.com
        </a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Footer