import React from 'react';

class SignUp extends React.Component {

  state = {
    fields: {
      name: "",
      password: ""
    },
    error: ""
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

  handleChange = e => {
    const userInfo = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: userInfo });
  }

  render() {

    return (
      <div id="signup" >
        <h3>Sign Up</h3>
        <form id="signup-form" onSubmit={this.props.handleSignUp}>
          <label> Username: </label>
          <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange}></input>
          <label> Password: </label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default SignUp;
