import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
    
render() {
  return (
    <div>
      <h1> Create User Account</h1>
      <br />
      First Name:
            <input
        placeholder="First Name"
        onChange={(e) => this.first_name(e.target.value)}
      />
      <br />
      <br />
      Last Name:
            <input
        placeholder="Last Name"
        onChange={(e) => this.last_name(e.target.value)}
      />
      <br />
      <br />
      Email Address:
            <input
        placeholder="Enter your Email"
        type="email"
        onChange={(e) => this.email(e.target.value)}
      />
      <br />
      <br />
      State
            <input
        placeholder="Select your State"
        onChange={(e) => this.state(e.target.value)}
      />
      <br />
      <br />
      Postcode:
            <input
        placeholder="Enter your Postocde"
        onChange={(e) => this.postcode(e.target.value)}
      />
      <br />
      <br />
      Password:
            <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => this.password(e.target.value)}
      />
      <br />
      <br />
      <Link to = "/">
      <button> Submit </button>
      </Link>
      <br />
      <br />
      Already have an Account <Link to="/LogInAcc">Sign In Now</Link>
    </div>
  );
}
}

export default CreateAccount;