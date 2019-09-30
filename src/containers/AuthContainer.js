import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUp from '../components/SignUp.js';
import Login from '../components/Login.js';

class AuthContainer extends React.Component {

  render() {
    return(
      <div id="AuthContainer">
        <SignUp />
        <Login handleLogin={this.props.handleLogin} handleChange={this.props.handleChange} newUser={this.props.newUser}/>
      </div>
    )
  }
}

export default withRouter(AuthContainer);
