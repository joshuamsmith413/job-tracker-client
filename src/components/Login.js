import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { withRouter } from 'react-router-dom';

const initialfields = {
  name: '',
  password: ''
}

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
    this.setState( {fields: userInfo} );
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
      if (data.error) {
        this.setState(
          { error: data.error }
        )
      } else if (data.id) {
        this.props.dispatch(login(data))
        localStorage.setItem('token', data.token)
        this.props.history.push(`/users/`)
      }
    })
    .then(this.setState(
      { fields: initialfields }
    ))
  }


  renderError = () => {
    return this.state.error ? <div id='error'>{this.state.error}</div> : null
  }

  render() {
    console.log(localStorage)
    return(
      <div id="Login">
        <form onSubmit={this.handleLogin}>
          <h3>Login</h3>
          <label> Username: </label>
          <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange}></input>
          <label> Password: </label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}></input>
          <input type="submit"></input>
          {this.renderError()}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(Login));
