import React, { useState, useEffect }  from 'react';

import {Rating} from '@material-ui/lab';
import {Button} from 'reactstrap'
import {Card, CardTitle, CardText, Row, Col, Table} from 'reactstrap'
import { Container } from 'reactstrap';
import './Beginners.css';
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
         <Table  bordered class="table table-hover " className='table'>
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Achievement</th>
      <th scope="col">First Accessment</th>
      <th scope="col">Last Accessment</th>
      <th scope="col">Total/Average</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Face In Water (3 seconds)</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
     {/* row 2  */}
      <td>Glide on Front (face in water 3 seconds)</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      {/* row 3 */}
      <td>Flutter Kick (face down 3 seconds)</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      {/* row 4 */}
      <td>Float on Back (5-10 seconds assisted)</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      {/* row 5 */}
      <td>Glide on Back, add Flutter Kick</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      {/* row 6 */}
      <td>Glide on Back, add Flutter Kick</td>
      <td>            <Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
      <td><Rating 
                style={{marginLeft:-6}}
                value={value} 
                onChange={(e, newValue) => {
                setValue(newValue);
            }} 
                onChangeActive={(e, newHover) => {
                setHover(newHover);
            }}    
         ></Rating></td>
         <th scope="col"></th>
    </tr>
  </tbody>
  </Table>
               
         <hr/>
                <form input='text'>Comments/Notes</form>
                <textarea placeholder='Comments/Notes'></textarea>
                {/* <Button> Add </Button> */}
         
            
        </Container>
       
    )
}

export default Beginners


