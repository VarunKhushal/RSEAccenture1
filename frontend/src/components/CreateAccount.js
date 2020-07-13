import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import './stylesheet/create.css'

class CreateAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			state: '',
			postcode: '',
			pw: '',
		};
	  }

  //create textfields to allow the user to enter in their details 
  render() {
    return (
      <>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

        <div className="container">
        <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default">
        		<div className="panel-heading">
			    		<h3 className="panel-title">Please sign up<small>It's free!</small></h3>
			 			</div>
			 			<div className="panel-body">
			    		<form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
                      <input name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
                      <input name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
                  <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"/>
			    			</div>


                <div className="form-group">
			    					<div className="form-group">
                      <input className="form-control input-sm"  placeholder="Select your State" />
			    					</div>
			    			</div>


                <div className="form-group">
			    					<div className="form-group">
                    <input className="form-control input-sm"  placeholder="Enter your Postocde" />
			    					</div>
			    			</div>     


			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    			{/* <div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password"/>
			    					</div>
			    				</div> */}
			    			</div>

                

                		{/* <input type="submit" id= "register" value="Register" className="btn btn-info btn-block"/> */}
							<Link className="btn btn-info btn-block" to="/LogInAcc">Submit</Link>
			    			
			    			
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