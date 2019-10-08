import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { getApps } from '../actions';
import JobAppDisplay from './JobAppDisplay';
import API from '../API.js';





class UserShow extends React.Component {

  getUserApps = () => {
    if (this.props.jobApps.length === 0) {
      API.getUserApps(this.props.currentUser)
      .then(r => r.json())
      .then(data => {
        this.props.dispatch(getApps(data))
      })
    }
  }


  passAppProps = () => {
    if (this.props.jobApps) {
      return this.props.jobApps.map(app => {
        return  <JobAppDisplay app={app}/>
      })
    }
  }

  render() {

    return(
      <div id='UserShow'>
        <JobAppForm />
        {this.getUserApps()}
        <div id='JobAppDisplay'>
          <div className='company'><u><strong>Company</strong></u></div>
          <div className='position'><u><strong>Position</strong></u></div>
          <div className='contact'><u><strong>Contact</strong></u></div>
          <div className='coverLetter'><u><strong>Cover Letter</strong></u></div>
          <div className='resume'><u><strong>Resume</strong></u></div>
          <div className='weekCheckup'><u><strong>Week one Checkin</strong></u></div>
          <div className='foundOn'><u><strong>Found On</strong></u></div>
          {this.passAppProps()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps : state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(UserShow));
