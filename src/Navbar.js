import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
  <ul>
      <li><Link to="/beginners">Beginners</Link> </li>
      <li><Link to="/intermediate">Intermediate</Link> </li>
  </ul>
    )
}

export default Navbar
