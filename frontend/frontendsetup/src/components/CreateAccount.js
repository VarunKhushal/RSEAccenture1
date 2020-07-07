import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
          <br/>
          <br/>
           First Name:
            <input
              placeholder="First Name"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
            />
            <br/>
            <br/>
            Last Name:
            <input
              placeholder="Last Name"
              onChange={(event, newValue) => this.setState({ last_name: newValue })}
            />
            <br />
            <br/>
            Email Address:
            <input
              placeholder="Enter your Email"
              type="email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <br/>
            State
            <input
              placeholder="Select your State"
              onChange={(event, newValue) => this.setState({ state: newValue })}
            />
            <br />
            <br/>
            Postcode: 
            <input
              placeholder="Enter your Postocde"
              onChange={(event, newValue) => this.setState({ postcode: newValue })}
            />
            <br />
            <br/>
            Password: 
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <br/>
            <button> Submit </button> 
            <br/>
            <br/>
            Already have an Account <Link to="/LogInAcc">Sign In Now</Link>
      </div>
    );
  }
}

export default CreateAccount;