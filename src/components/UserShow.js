import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { getApps, logout, dropApps } from '../actions';
import JobAppDisplay from './JobAppDisplay';




class UserShow extends React.Component {

  getUserApps = () => {
    if (this.props.currentUser) {
      fetch('http://localhost:3000/job_applications/get_apps', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(this.props.currentUser)
      })
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

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.dispatch(logout())
    this.props.dispatch(dropApps())
    localStorage.removeItem("token")
    this.props.history.push(`/`)
  }

  render() {
    console.log("user show", localStorage)
    return(
      <div id='UserShow'>
        {`hello from ${this.props.currentUser.name}`}
        <button onClick={this.handleLogout}>Logout</button>
        <JobAppForm />
        <button onClick={this.getUserApps}>See your Apps</button>
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
