import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { getApps } from '../actions';
import JobAppDisplay from './JobAppDisplay';
import API from '../API.js';





const UserShow = props => {

  const getUserApps = () => {
    if (props.jobApps.length === 0) {
      API.getUserApps(props.currentUser)
      .then(r => r.json())
      .then(data => {
        props.dispatch(getApps(data))
      })
    }
  }


  const passAppProps = () => {
    if (props.jobApps) {
      return props.jobApps.map(app => {
        return  <JobAppDisplay app={app}/>
      })
    }
  }

  return (
    <div id='UserShow'>
      <JobAppForm />
      {getUserApps()}
      <div id='JobAppDisplay'>
        <div className='company'><u><strong>Company</strong></u></div>
        <div className='position'><u><strong>Position</strong></u></div>
        <div className='contact'><u><strong>Contact</strong></u></div>
        <div className='coverLetter'><u><strong>Cover Letter</strong></u></div>
        <div className='resume'><u><strong>Resume</strong></u></div>
        <div className='weekCheckup'><u><strong>Week one Checkin</strong></u></div>
        <div className='foundOn'><u><strong>Found On</strong></u></div>
        {passAppProps()}
      </div>
    </div>
  )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps : state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(UserShow));
