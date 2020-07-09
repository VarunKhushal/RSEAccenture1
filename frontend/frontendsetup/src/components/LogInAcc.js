import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const USERS = {
  "ts@gmail.com": {
    email: "ts@gmail.com",
    password: "123"
  },
  
  "jd@gmail.com": {
    email: "jd@gmail.com",
    password: "123"  
  },
  
  "po@gmail.com": {
    email: "po@gmail.com",
    password: "123"  
  },
}

class LogInAcc extends Component {
  constructor(props) {
   super(props);
  	this.state = {
     	email: '',
      password: '',
      error: ''
    }
  }

  
  handleLogIn = () => {
    console.log(this);
    const user = USERS[this.state.email]; // undefined
    if (user && user.password === this.state.password) {
      console.log("success");
    }
    else {
      console.log("incorrect email or password");
      this.setState({
        ...this.state,
        error: 'Incorrect email or password.'
      });
    }
  }
  
  render() {
    let errorComponent = null;
    if (this.state.error !== '') {
      errorComponent = (
        <div>{this.state.error}</div>
      );
    }
    
    return (
      <div>
        <h1>Log into Account</h1>
        <p></p>
        <p></p>
            Email Address
           <input
             placeholder="Email"
             onChange={(e) => this.setState({
          		...this.state,
            	email: e.target.value
          		})}
             />
           <br/>
           <br/>
              Password
             <input
               placeholder="Password"
               type = "password"
               onChange={(e) => this.setState({
                ...this.state,
                password: e.target.value
                })}
               />
             <br/>             
             <br/>
             <Link to = "/">
             <button onClick={this.handleLogIn}>Log In </button>
             </Link>
             <br/>            
        	   <br/>
        		{errorComponent}
        		
             Don't have Account <Link to="/CreateAccount">Register Now</Link>
      </div>
    );
  }
} 

export default LogInAcc;
