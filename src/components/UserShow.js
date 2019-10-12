import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import JobAppDisplay from './JobAppDisplay.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout, dropApps, getApps } from '../actions';
import API from '../API.js';

const UserShow = props => {

  useEffect(() => {
    if(props.currentUser && props.jobApps.length === 0) {
      API.getUserApps(props.currentUser.id)
      .then(r => r.json())
      .then(data => {
        props.dispatch(getApps(data))
      })
    }
  })

  const passAppProps = (apps) => {
    if (apps.length > 0) {
      return apps.map(app => {
        return  <JobAppDisplay app={app}/>
      })
    }
  }

  const renderCurrent = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(app.current) {
          return (
            <JobAppDisplay app={app} />
          )
        }
      })
    }
  }

  const renderInterview = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(app.interview) {
          return (
            <JobAppDisplay app={app} />
          )
        }
      })
    }
  }

  const deleteUser = () => {
    API.destroyUser(props.currentUser.id)
    .then(r => r.json())
    .then(data => alert(data.message))
      props.dispatch(logout())
      props.dispatch(dropApps())
      localStorage.removeItem("token")
      props.history.push(`/`)
  }

  const handleDeteButton = () => {
    confirmAlert({
     title: 'Confirm to Delete',
     message: 'Are you sure to do this.',
     buttons: [
       {
         label: 'Yes',
         onClick: () => deleteUser()
       },
       {
         label: 'No',
         onClick: () => null
       }
     ]
   });
  }
  return (
    <div id='UserShow'>
      <JobAppForm />
      <div id='JobAppDisplay'>
        <h3>Current Applications</h3>
        <div className='company'><u><strong>Company</strong></u></div>
        <div className='position'><u><strong>Position</strong></u></div>
        <div className='contact'><u><strong>Contact</strong></u></div>
        <div className='coverLetter'><u><strong>Cover Letter</strong></u></div>
        <div className='resume'><u><strong>Resume</strong></u></div>
        <div className='weekCheckup'><u><strong>Week one Checkin</strong></u></div>
        <div className='foundOn'><u><strong>Found On</strong></u></div>
        <div className='empty'></div>
        {renderCurrent(props.jobApps)}
        <h3>Companies you have interviewed with</h3>
        {renderInterview(props.jobApps)}
      </div>
      <div>
        <Link to='/edit/user'>Edit User</Link>
        <button onClick={handleDeteButton}>Delete user</button>
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
