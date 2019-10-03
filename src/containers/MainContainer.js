import React from 'react';
import AuthContainer from './AuthContainer.js';
import Home from '../components/Home.js';
import UserShow from '../components/UserShow.js';
import { Route, withRouter } from 'react-router-dom';
import { getApps } from '../actions';
import { connect } from 'react-redux';

class MainContainer extends React.Component {

  state = {
    users: []
  }

  // componentDidMount() {
  //
  //   fetch('http://localhost:3000/job_applications')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.props.dispatch(getApps(data))
  //   })
  // }

  render() {

    return (
      <div id="MainContainer">
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" render={ () => <AuthContainer handleChange={this.props.handleChange} handleLogin={this.props.handleLogin} newUser={this.props.newUser}/>} />
        <Route path="/users/" render={ () => <UserShow/>} />
      </div>
    )
  };
};

export default connect()(withRouter(MainContainer));
