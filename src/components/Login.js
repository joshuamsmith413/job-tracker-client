import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, getApps } from '../actions';
import { withRouter } from 'react-router-dom';
import API from '../API.js';

const Login = props => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameInput = e => {
    setName(e.target.value)
  }

  const handlePasswordInput = e => {
    setPassword(e.target.value)
  }

  const resetFields = () => {
    setName('');
    setPassword('');
  }

  const handleLogin = e => {
    e.preventDefault()
    const params = {name, password}
    API.login(params)
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        setError(data.error)
      } else if (data.id) {
        props.dispatch(login(data))
        localStorage.setItem('token', data.token)
        props.history.push(`/profile`)
        API.getUserApps(data)
        .then(r => r.json())
        .then(data => {
          props.dispatch(getApps(data))
        })
      }
    })
    .then(resetFields())
  }


  const renderError = () => {
    return error ? <div className='error'>{error}</div> : null
  }



  return(
    <div id="Login">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <label> Username: </label>
        <input type="text" name="name" value={name} onChange={handleNameInput}></input>
        <label> Password: </label>
        <input type="password" name="password" value={password} onChange={handlePasswordInput}></input>
        <input type="submit"></input>
        {renderError()}
      </form>
    </div>
  )

}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(Login));
