import React from 'react';
import './App.css';
import Home from './Home';
import Beginners from './Beginners';
import Login from './Login';
import { Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">

    <Route exact path ="/" component={Home} />
    <Route exact path ="/login" component={Login} />
    <Route exact path ="/beginners" component={Beginners} />
    
    </div> 
  );
}

export default App;




{/* <Home />
    <Login />
    <Beginners /> */}