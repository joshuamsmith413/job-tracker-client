import React, { useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { connect } from 'react-redux';
import { login, getApps } from './actions';
import API from './API.js'

const App = props => {
  const token = localStorage.token;
  useEffect(() => {
    if (token && !props.currentUser.id) {
      API.autoLogin(token)
      .then(r => r.json())
      .then(data => {
        props.dispatch(login(data))
      })
    }
    if (props.currentUser && props.apps.length === 0 ) {
      API.getUserApps(props.currentUser)
      .then(r => r.json())
      .then(data => {
        props.dispatch(getApps(data))
      })
    }
  })

  return (
    <div className="App">
      <MainContainer />
    </div>
  );

}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        apps: state.jobApps
    }
}


export default connect(mapStateToProps)(withRouter(App));
