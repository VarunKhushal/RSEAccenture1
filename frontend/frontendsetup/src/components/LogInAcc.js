import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogInAcc extends Component {
  constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
 }

render() {
    return (
      <div>
        <p></p>
        <p></p>
        <p></p>
            Email Address
           <input
             placeholder="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <br/>
              Password
             <input
               placeholder="Password"
               type = "password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>             
             <br/>
             <button>Log In </button>
             <br/>            
            <br/>
             Don't have Account <Link to="/CreateAccount">Register Now</Link>
      </div>
    );
  }
}

export default LogInAcc;
