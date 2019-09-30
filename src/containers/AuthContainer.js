import React from 'react';
import { withRouter } from 'react-router-dom';
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
      data.error ? alert(`${data.error}`) : alert(`Welcome ${this.state.fields.name}`)
    })
    .then(this.props.history.push("/"))
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

export default withRouter(AuthContainer);
