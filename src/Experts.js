import React, { useState, useEffect }  from 'react';
import { Container } from 'reactstrap';
import {Rating} from '@material-ui/lab';

function Experts() {

const [value, setValue] = useState();
const [hover, setHover] = useState();
return (
    
   <Container>
   <br></br>
   <br></br>
    <h1>Experts</h1>
    <br></br>
    <br></br>
    <div className='div-one'>
     <p> Breaststroke Pull Out
     
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
       
      <p>Freestyle Flip Turn
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
            <form input='text'>Comments/Notes</form>
            <textarea placeholder='Comments/Notes'></textarea>
            {/* <Button> Add </Button> */}
            
     
        
    </Container>
)
}

export default Experts
