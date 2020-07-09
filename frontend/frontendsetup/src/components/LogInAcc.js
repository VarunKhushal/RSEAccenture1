import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


import './stylesheet/login.css'

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

  
  
  handleLogIn = (e) => {
    e.preventDefault();
    console.log(this);
    const user = USERS[this.state.email]; // undefined
    if (user && user.password === this.state.password) {
      console.log("success");

      this.props.history.push('/')
      
    } else {
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
      <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> 
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div className="wrapper fadeInDown">
        <div id="formContent">

          
          {/* uncomment after */}
          {/* <div class="fadeIn first">
              <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          </div> */}

          <form className="myform">
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" 
                        onChange={(e) => this.setState({
                          ...this.state,
                        email: e.target.value
                          })}/> 
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password"
                        onChange={(e) => this.setState({
                          ...this.state,
                          password: e.target.value
                          })}/>
            <a href="#">Forgot your password?</a>
            <br></br>
            <br></br>
            {/* <input type="submit" class="fadeIn fourth" value="Log In"/> */}
            
            <button type="submit" className="fadeIn fourth" value="Log In" onClick={this.handleLogIn}> Log In </button>
            
            <div id="error">
              {errorComponent}
            </div>

            <br></br>
            
            <div id ="remember">
              remember me &nbsp;&nbsp;
              <input type="checkbox"/>
            </div>
					
	
          </form>


          <div id="formFooter">
            Don't have an account<br></br>
            <a className="underlineHover" href="/CreateAccount">Register Now</a>
          </div>

          
        </div>

      </div>
      </>
    
    );
  }
} 

export default LogInAcc;
