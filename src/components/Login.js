import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

  state = {
    fields: {
      name: "",
      password: ""
    },
    error: ""
  }

  handleChange = e => {
    console.log(this.state.fields)
    const userInfo = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ newUser: {fields: userInfo} });
  }

  handleLogin = e => {
    e.preventDefault()
    console.log(this.state.fields)
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    })
    .then(r => r.json())
    .then(data => {
      this.props.dispatch(login(data))
    })
    .then(this.props.history.push(`/users/`))
  }


  render() {
    return(
      <div id="Login">
        <form onSubmit={this.handleLogin}>
          <h3>Login</h3>
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

export default connect()(withRouter(Login));
