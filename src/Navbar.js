import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar() {
    return (
  <div className='Nav-Bar'>    
    <ul >
        <li><Link to="/beginners">Beginners</Link> </li>
        <li><Link to="/intermediate">Intermediate</Link> </li>
    </ul>

  </div>
    )
}

export default Navbar
