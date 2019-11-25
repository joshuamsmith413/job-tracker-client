import React from 'react';
import { connect } from 'react-redux';
import JobAppForm from '../components/JobAppForm.js';
import JobAppDisplay from '../components/JobAppDisplay';
import SourceButtons from '../components/SourceButtons.js';
import Login from '../components/Login.js';

const ProfileContainer = props => {
  if (props.currentUser) {
    return (
      <div id='profile-container'>
        <JobAppForm />
        <JobAppDisplay />
        <SourceButtons />
      </div>
    )
  } else {
    return <Login />
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    jobApps : state.jobApps
  }
}

export default connect(mapStateToProps)(ProfileContainer);
