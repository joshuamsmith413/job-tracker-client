import React from 'react';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login.js';

const AuthContainer = props => {


  return(
    <div id="AuthContainer">
      <Login />
    </div>
  )
}

export default withRouter(AuthContainer);
