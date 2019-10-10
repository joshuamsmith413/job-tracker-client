import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import JobAppDisplay from './JobAppDisplay';

const UserShow = props => {

  const passAppProps = (apps) => {
    if (apps.length > 0) {
      return apps.map(app => {
        return  <JobAppDisplay app={app}/>
      })
    }
  }
  console.log(props.jobApps)
  return (
    <div id='UserShow'>
      <JobAppForm />
      <div id='JobAppDisplay'>
        <div className='company'><u><strong>Company</strong></u></div>
        <div className='position'><u><strong>Position</strong></u></div>
        <div className='contact'><u><strong>Contact</strong></u></div>
        <div className='coverLetter'><u><strong>Cover Letter</strong></u></div>
        <div className='resume'><u><strong>Resume</strong></u></div>
        <div className='weekCheckup'><u><strong>Week one Checkin</strong></u></div>
        <div className='foundOn'><u><strong>Found On</strong></u></div>
        {passAppProps(props.jobApps)}
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
