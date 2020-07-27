import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Rating} from '@material-ui/lab';

function Intermediate() {// const [rating, setRating] = useState(3);
    const [value, setValue] = useState();
    const [hover, setHover] = useState();
    return (
        
       <Container>
       <br></br>
       <br></br>
        <h1>Intermediate</h1>
        <br></br>
        <br></br>
        <div className='div-one'>
         <p> Safety Freestyle (3 big arms to a pop-up breath or roll back)
         
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
           
          <p>Breath Control (3 big arms, roll to back, deep breath, roll to front for 3 more big arms)
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
          <p>Freestyle (3 big arms, roll to ear to breath, roll down to front for 3 more big arms)
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
          <p>Kicking on Back, add Big Arms
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
         <p>Half Lap Backstroke
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
         <p>Half Lap Freestyle
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

export default Intermediate
