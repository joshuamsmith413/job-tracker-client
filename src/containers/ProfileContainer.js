import React from 'react';
import { connect } from 'react-redux';
import JobAppForm from '../components/JobAppForm.js';
import JobAppDisplay from '../components/JobAppDisplay';
import SourceButtons from '../components/SourceButtons.js';
import { Button } from 'react-bootstrap';

const ProfileContainer = props => {
  if (props.currentUser) {
    return (
      <div id='ProfileContainer'>
        <JobAppForm />
        <JobAppDisplay />
        <SourceButtons />
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    jobApps : state.jobApps
  }
}

export default connect(mapStateToProps)(ProfileContainer);
