import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function Login() {
    return (
        <div>
        <h1></h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
       
        <Form className='login-form'>
            <h1>
                <span className='font-weight-bold ' >Dolphin Swimmers</span>              
            </h1>
            <h2 className='text-center'>Login</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email Address"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className='btn-lg btn-info btn-block'>Log In</Button>
            <div className='text-center'>
                <a href='/sign-up'>Sign Up</a>
                <span className='p-2'>|</span>
                <a href='/sign-up'>Forgot Password</a>

            </div>
        </Form>
        </div>
        
    )
}
 
export default Login
