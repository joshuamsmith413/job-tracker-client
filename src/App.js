import React, { useEffect, useState } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { connect } from 'react-redux';
import { login, getApps } from './actions';
import API from './API.js'

const App = props => {
  const [status, setStatus] = useState(false)
  const { currentUser } = props;
  const token = localStorage.token;

  useEffect(() => {
    if (token && !currentUser) {
      API.autoLogin(token)
      .then(r => r.json())
      .then(data => {
        props.dispatch(login(data))
      })
    }
    if(currentUser && props.apps.length === 0 && status === false) {
      API.getUserApps(currentUser.id)
      .then(r => r.json())
      .then(data => {
        if (data.status) {
          setStatus(data.status)
        } else {
          props.dispatch(getApps(data))
          setStatus(false)
        }
      })
    }
  })

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
