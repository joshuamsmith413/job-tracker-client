import React from 'react';
import SignUp from '../components/SignUp.js';
import Login from '../components/Login.js';

class AuthContainer extends React.Component {

  state = {
    fields: {
      name: "",
      password: ""
    },
    error: ""
  }


  handleChange = e => {
    const userInfo = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: userInfo });
  }

 handleSignUp = e => {
   e.preventDefault()
   console.log("what you entered",this.state.fields);
   fetch('http://localhost:3000/users', {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
     body: JSON.stringify(this.state.fields)
   })
   .then(r => r.json())
   .then(data => {
      console.log("giving you:",data.error)
      data.error ? alert(`${data.error}`) : alert(`Welcome ${this.state.fields.name}`)
    })
    .then(console.log(document.getElementById("signup-form")))
 }



  render() {
    return(
      <div id="AuthContainer">
        <SignUp handleChange={this.handleChange} fields={this.state.fields} handleSignUp={this.handleSignUp}/>
        <Login />
      </div>
    )
  }
}

export default AuthContainer;
