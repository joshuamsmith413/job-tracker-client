import React from 'react';
import AuthContainer from './AuthContainer.js';
import Home from '../components/Home.js';
import ProfileContainer from './ProfileContainer.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/NavBar.js';
import EditUser from '../components/EditUser.js';
import EditApp from '../components/EditApp.js';

const MainContainer = props => {

  return (
    <div id="MainContainer">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" render={() => <AuthContainer handleChange={props.handleChange} handleLogin={props.handleLogin} newUser={props.newUser} />} />
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/edit/user" render={() => <EditUser />} />
      <Route path='/edit/app' render={() => <EditApp />} />
    </div>
  )
};

export default connect()(withRouter(MainContainer));
