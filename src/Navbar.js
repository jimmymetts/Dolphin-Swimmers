import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar() {
    return (
      <nav class="navbar navbar-light bg-light">
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </nav>
  

    )
}

export default Navbar


{/* <div className='Nav-Bar'>  
    
<ul >
    <li><Link to="/beginners">Beginners</Link> </li>
    <li><Link to="/intermediate">Intermediate</Link> </li>
</ul>

</div> */}
