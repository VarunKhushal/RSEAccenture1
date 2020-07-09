import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './stylesheet/login.css'

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
      // <div id = "comps">
      //   <p></p>
      //   <p></p>
      //   <p></p>
      //       Email address
      //      <input
      //        placeholder="Email"
      //        onChange = {(event,newValue) => this.setState({email:newValue})}
      //        />
      //      <br/>
      //      <br/>
      //         Password
      //        <input
      //          placeholder="Password"
      //          type = "password"
      //          onChange = {(event,newValue) => this.setState({password:newValue})}
      //          />
      //        <br/>             
      //        <br/>
      //        <button>Log In </button>
      //        <br/>            
      //       <br/>
      //        Don't have Account <Link to="/CreateAccount">Register Now</Link>
      // </div>
      <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> 
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div class="wrapper fadeInDown">
        <div id="formContent">

          
          {/* uncomment after */}
          {/* <div class="fadeIn first">
              <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          </div> */}

          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" 
                        onChange = {(event,newValue) => this.setState({email:newValue})}/> 
            <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}/>
            <a href="#">Forgot your password?</a>
            <br></br>
            <br></br>
            <input type="submit" class="fadeIn fourth" value="Log In"/>
            <br></br>
            
            <div id ="remember">
              remember me &nbsp;&nbsp;
              <input type="checkbox"/>
            </div>
					
	
          </form>

          <div id="formFooter">
      
            Don't have an account<br></br>
            <a class="underlineHover" href="/CreateAccount">Register Now</a>
          </div>

          
        </div>
      </div>
      </>
    
    );
  }
}

export default LogInAcc;
