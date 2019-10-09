import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';
import API from '../API.js';

const SignUp = props => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = e => {
    e.preventDefault()
    const newUser = {name, password}
    API.createUser(newUser)
    .then(r => r.json())
    .then(data => {
       if(!data.error) {
         API.login(newUser)
         .then(r => r.json())
         .then(data => {
           if (data.error) {
             setError(data.error)
           } else if (data.id) {
             props.dispatch(login(data))
             localStorage.setItem('token', data.token)
             props.history.push(`/profile`)
           }
         })
       } else {
         alert(`${data.error}`);
         setName('');
         setPassword('');
       }
     })
  }

  const renderError = () => {
    return error ? <div id='error'>{error}</div> : null
  }

  const handleNameInput = e => {
    setName(e.target.value)
  }

  const handlePasswordInput = e => {
    setPassword(e.target.value)
  }

  return (
    <div id="signup" >
      <h3>Sign Up</h3>
      <form id="signup-form" onSubmit={handleSignUp}>
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

export default connect()(withRouter(SignUp));
