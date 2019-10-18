import React, { useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { connect } from 'react-redux';
import { login } from './actions';
import API from './API.js'

const App = props => {
  const { currentUser, apps} = props;
  const token = localStorage.token;

  useEffect(() => {
    if (token && !currentUser) {
      API.autoLogin(token)
      .then(r => r.json())
      .then(data => {
        props.dispatch(login(data))
      })
    }
  }, [token, apps, currentUser, props])

  return (
    <div id="app">
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
