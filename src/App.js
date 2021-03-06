import React from 'react';

import './App.css';
import Beginners from './Beginners';
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import NavBar from './Navbar';
import Intermediate from './Intermediate';
import Advanced from './Advanced';
import Experts from './Experts';


function App() {
  return (
    <div className="App">
    
    <Route exact path ="/" component={Login} />
    <Route exact path ="/beginners" component={Beginners} />
    <Route exact path ="/intermediate" component={Intermediate} />
    <Route exact path ="/advanced" component={Advanced} />
    <Route exact path ="/experts" component={Experts} />
    
    
    </div> 
  );
}

export default App;




