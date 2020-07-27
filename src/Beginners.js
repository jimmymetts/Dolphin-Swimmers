import React, { useState, useEffect }  from 'react';

import {Rating} from '@material-ui/lab';
import {Button} from 'reactstrap'
import {Card, CardTitle, CardText, Row, Col} from 'reactstrap'
import { Container } from 'reactstrap';
// import './Beginners.css';
import './Navbar';
import { blue, green } from '@material-ui/core/colors';




function Beginners() {
    // const [rating, setRating] = useState(3);
    const [value, setValue] = useState();
    const [hover, setHover] = useState();
    return (
        
       <Container>
       <br></br>
       <br></br>
        <h1>Beginners</h1>
        <br></br>
        <br></br>
        <div className='div-one'>
         <p> Face In Water (3 seconds)
         
            <Rating 
                // className='rating'
                style={{marginLeft:50}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
              }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
              }} >   
            </Rating>  
            </p>
            </div>       
            <hr/>
           
          <p>Glide on Front (face in water 3 seconds)
            <Rating 
            style={{marginLeft:40, marginBottom:10}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
            ></Rating></p> 
           
        
            <hr/>
          <p>Flutter Kick (face down 3 seconds)
            <Rating 
                style={{marginLeft:50}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                 setHover(newHover);
            }}    
           ></Rating></p> 
            <hr/>
          <p>Float on Back (5-10 seconds assisted)
            <Rating 
                style={{marginLeft:50}}
                 value={value} 
                 onChange={(e, newValue) => {
                 setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
            ></Rating></p> 
    
            <hr/>
         <p>Float on Back (5-10 seconds unassisted)
            <Rating 
                style={{marginLeft:50}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
            ></Rating></p> 
            
            <hr/>
         <p>Glide on Back, add Flutter Kick
            <Rating 
                style={{marginLeft:50}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></p> 
               
         <hr/>
                <form input='text'>Comments/Notes</form>
                <textarea placeholder='Comments/Notes'></textarea>
                {/* <Button> Add </Button> */}
         
            
        </Container>
       
    )
}

export default Beginners


