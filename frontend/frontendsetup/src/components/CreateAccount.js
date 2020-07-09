import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import './stylesheet/create.css'


class CreateAccount extends Component {
  constructor(props) {
    //allow access to all the component attributes and methods
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      state: '',
      postcode: '',
      password: ''
    }

  

  // const [quote, setQuote] = useState('');
  
  // function handleSubmitForm(){
  //   let quotePayload ={
  //     quote: quote
  //   }
  //   fetch('https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote', {
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(quotePayload), 
  //     mode: 'no-cors'
  //   })
  //   .then(response => console.log(response))
  //   .catch((error)=> console.log(error))
  // }
  }
  //create textfields to allow the user to enter in their details 
  render() {
    return (
      // <div>
      //     <br/>
      //     <br/>
      //      First Name:
      //       <input
      //         placeholder="First Name"
      //         onChange={(event, newValue) => this.setState({ first_name: newValue })}
      //       />
      //       <br/>
      //       <br/>
      //       Last Name:
      //       <input
      //         placeholder="Last Name"
      //         onChange={(event, newValue) => this.setState({ last_name: newValue })}
      //       />
      //       <br />
      //       <br/>
      //       Email Address:
      //       <input
      //         placeholder="Enter your Email"
      //         type="email"
      //         onChange={(event, newValue) => this.setState({ email: newValue })}
      //       />
      //       <br />
      //       <br/>
      //       State
      //       <input
      //         placeholder="Select your State"
      //         onChange={(event, newValue) => this.setState({ state: newValue })}
      //       />
      //       <br />
      //       <br/>
      //       Postcode: 
      //       <input
      //         placeholder="Enter your Postocde"
      //         onChange={(event, newValue) => this.setState({ postcode: newValue })}
      //       />
      //       <br />
      //       <br/>
      //       Password: 
      //       <input
      //         type="password"
      //         placeholder="Enter your Password"
      //         onChange={(event, newValue) => this.setState({ password: newValue })}
      //       />
      //       <br />
      //       <br/>
      //       <button> Submit </button> 
      //       <br/>
      //       <br/>
      //       Already have an Account <Link to="/LogInAcc">Sign In Now</Link>
      // </div>

      <>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

        <div class="container">
        <div class="row centered-form">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div class="panel panel-default">
        		<div class="panel-heading">
			    		<h3 class="panel-title">Please sign up<small>It's free!</small></h3>
			 			</div>
			 			<div class="panel-body">
			    		<form role="form">
			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
                      <input name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" 
                          onChange={(event, newValue) => this.setState({ first_name: newValue })} />
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
                      <input name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" 
                          onChange={(event, newValue) => this.setState({ last_name: newValue })}/>
			    					</div>
			    				</div>
			    			</div>

			    			<div class="form-group">
                  <input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" 
                          onChange={(event, newValue) => this.setState({ email: newValue })}/>
			    			</div>

			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password"/>
			    					</div>
			    				</div>

			    			</div>

                <input type="submit" id= "register" value="Register" class="btn btn-info btn-block"/>
			    			
			    			
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>

      </>
    );
  }
}

export default CreateAccount;