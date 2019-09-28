import React from 'react';
import SignUp from '../components/SignUp.js';
import Login from '../components/Login.js';

class AuthContainer extends React.Component {

  state = {
    name: "",
    password: ""
  }


  handleChange = e => {
    e.persist()
    console.log(e.target.className)
    this.setState( prevState => {
      return { [e.target.className]: e.target.value }
    })
  }

 handleSignUp = e => {
   e.preventDefault()
   console.log("what you entered",this.state);
   fetch('http://localhost:3000/users', {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
     body: JSON.stringify(this.state)
   })
   .then(r => r.json())
   .then(data => {
      console.log("giving you:",data)

   })
 }

  render() {
    return(
      <div id="AuthContainer">
        <SignUp handleChange={this.handleChange} handleSignUp={this.handleSignUp}/>
        <Login />
      </div>
    )
  }
}

export default AuthContainer;
