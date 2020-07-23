import React from 'react'
import {Button} from 'reactstrap'
import { Container } from 'reactstrap';
import './Beginners.css';

function Beginners() {
    return (
        <div>
            <h1>Beginners</h1>
<>
<Container className="themed-container" fluid={true}>.container-fluid</Container>
            </>
            <p>Face In Water (3 seconds)</p>
            <hr/>
            <p>Glide on Front (face in water 3 seconds)</p>
            <hr/>
            <p>Flutter Kick (face down 3 seconds)</p>
            <hr/>
            <p>Float on Back (5-10 seconds assisted)</p>
            <hr/>
            <p>Float on Back (5-10 seconds unassisted)</p>
            <hr/>
            <p>Glide on Back, add Flutter Kick</p>
            <hr/>
            <form input='text'>Comments/Notes</form>
            <textarea placeholder='Comments/Notes'></textarea>
            {/* <Button> Add </Button> */}
            
  
            
            
        </div>
       
    )
}

export default Beginners
