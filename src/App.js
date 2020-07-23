import React from 'react';
import './App.css';
import Beginners from './Beginners';
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import NavBar from './Navbar';
import Intermediate from './Intermediate';






function App() {
  return (
    <div className="App">
    <NavBar/>
    <Route exact path ="/" component={Login} />
    <Route exact path ="/beginners" component={Beginners} />
    <Route exact path ="/intermediate" component={Intermediate} />
    
    </div> 
  );
}

export default App;




{/* <Home />
    <Login />
    <Beginners /> */}