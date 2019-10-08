import React from 'react';
import AuthContainer from './AuthContainer.js';
import Home from '../components/Home.js';
import UserShow from '../components/UserShow.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';

class MainContainer extends React.Component {

  render() {

    return (
      <div id="MainContainer">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" render={ () => <AuthContainer handleChange={this.props.handleChange} handleLogin={this.props.handleLogin} newUser={this.props.newUser}/>} />
        <Route path="/profile" render={ () => <UserShow/>} />
      </div>
    )
  };
};

export default connect()(withRouter(MainContainer));
