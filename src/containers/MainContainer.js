import React from 'react';
import HomeContainer from './HomeContainer.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/NavBar.js';
import EditUser from '../components/EditUser.js';
import EditApp from '../components/EditApp.js';

const MainContainer = props => {

  return (
    <div id="MainContainer">
      <Navbar />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/edit/user" render={() => <EditUser />} />
      <Route path='/edit/app' render={() => <EditApp />} />
    </div>
  )
};

export default connect()(withRouter(MainContainer));
