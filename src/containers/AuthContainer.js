import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUp from '../components/SignUp.js';
import Login from '../components/Login.js';

const AuthContainer = props => {


  return(
    <div id="AuthContainer">
      <SignUp />
      <Login handleLogin={props.handleLogin} handleChange={props.handleChange} newUser={props.newUser}/>
    </div>
  )
}

export default withRouter(AuthContainer);
