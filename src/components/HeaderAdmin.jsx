import React from 'react'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
    return (
        <div>
    
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid d-flex align-items-center justify-content-center flex-column">
        <a class="navbar-brand text-center ms-2" href="#" style={{fontWeight:'700',fontSize:'35px'}}>StremsNow</a>
        <p className='text-light'>Admin</p>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
         <div /*class="collapse navbar-collapse"*/ id="navbarColor02">
          <ul class="navbar-nav me-auto">
            
            <li class="nav-item">
            <Link to={'/'}>
              <a class="nav-link active" href="#">
              <button type="button" class="btn btn-secondary" fdprocessedid="ro786">Movies</button>
              </a>
            </Link>
            </li>
            <li class="nav-item">
            <Link to={'/theatre'}>
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-secondary" fdprocessedid="ro786">Theatres</button>
              </a>
            </Link>
            </li>
            <li class="nav-item">
            <Link to={'/sheduleshow'}>
              <a class="nav-link" href="#">
              <button type="button" class="btn btn-secondary" fdprocessedid="ro786">Schedule Show</button>
              </a>
            </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <button type="button" class="btn btn-secondary" fdprocessedid="ro786">Logout</button>
              </a>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
    
        </div>
      )
}

export default HeaderAdmin