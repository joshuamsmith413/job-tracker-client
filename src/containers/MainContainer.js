import React from 'react';
import AuthContainer from './AuthContainer.js';
import Home from '../components/Home.js';
import UserShow from '../components/UserShow.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';

const MainContainer = props => {


  return (
    <div id="MainContainer">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" render={ () => <AuthContainer handleChange={props.handleChange} handleLogin={props.handleLogin} newUser={props.newUser}/>} />
      <Route path="/profile" render={ () => <UserShow/>} />
    </div>
  )
};

export default connect()(withRouter(MainContainer));
