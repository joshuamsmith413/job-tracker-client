import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { getApps } from '../actions';



class UserShow extends React.Component {

  getUserApps = () => {
    if (this.props.currentUser && this.props.jobApps.length < 1) {
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
          {app.created_at.substring(0, 10)} {app.company}: {app.cover_letter}
        </div>
      })
    }
  }


  render() {
    console.log("job apps", this.props.jobApps[0])
    return(
      <div id='UserShow'>
        {`hello from ${this.props.currentUser.name}`}
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
