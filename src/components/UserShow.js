import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { getApps, logout, dropApps } from '../actions';




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

  renderApps = () => {
    if (this.props.jobApps) {
      return this.props.jobApps.map(app => {
        return <div>
          <h3>{app.company}</h3>
          position: {app.position}<br/>
        Date Applied: {app.created_at.substring(0, 10)}<br/>
        contact: {app.contact}<br/>
      cover letter: {app.cover_letter}<br/>
           Resume: {app.resume}
           {this.renderWeekCheckup(app)}
           found on: {app.source}
        </div>
      })
    }
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.dispatch(logout())
    this.props.dispatch(dropApps())
    this.props.history.push(`/`)
  }

  renderWeekCheckup = (app) => {
    return !app.one_week_checkup ? <p>Don't forget to check in in one week!</p> : null
  }


  render() {
    console.log("props", this.props)
    return(
      <div id='UserShow'>
        {`hello from ${this.props.currentUser.name}`}
        <button onClick={this.handleLogout}>Logout</button>
        <JobAppForm />
        <button onClick={this.getUserApps}>See your Apps</button>
        {this.renderApps()}
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
