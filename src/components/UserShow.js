import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout, dropApps, getApps } from '../actions';
import ShowCompanyLink from './ShowCompanyLink.js'
import API from '../API.js';
import { Button } from 'react-bootstrap';

const UserShow = props => {

  const [status, setStatus] = useState(false)
console.log(status)
  useEffect(() => {
    if(props.currentUser && props.jobApps.length === 0 && status === false) {
      API.getUserApps(props.currentUser.id)
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

  const AddAppMessage = () => {
    return status === true ? <h5>Add an app to see it below!</h5> : null
  }

  const renderCurrent = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(app.current && !app.interview && !app.response && !app.one_week_checkup) {
          return(
            <div>
              <ShowCompanyLink app={app} />
            </div>
          )
        }
      })
    }
  }

  const renderWeekCheckup = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(!app.response && !app.interview && app.current && app.one_week_checkup) {
          return(
            <div>
              <ShowCompanyLink app={app} />
            </div>
          )
        }
      })
    }
  }

  const renderResponse = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(app.response && !app.interview && app.current && app.one_week_checkup) {
          return(
            <div>
              <ShowCompanyLink app={app} />
            </div>
          )
        }
      })
    }
  }

  const renderInterview = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(app.current && app.interview && app.response && app.one_week_checkup) {
          return(
            <div>
              <ShowCompanyLink app={app} />
            </div>
          )
        }
      })
    }
  }

  const renderArchive = apps => {
    if(apps.length > 0) {
      return apps.map(app => {
        if(!app.current) {
          return(
            <div>
              <ShowCompanyLink app={app} />
            </div>
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

  const handleDeleteButton = () => {
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

  const goToEditUser = () => {
    props.history.push(`/edit/user/${props.currentUser.id}`)
  }

  return (
    <div id='userShowContainer'>
      <JobAppForm />
      <div id="noApps">
        {AddAppMessage()}
      </div>
      <div id='emptystart'></div>
      <div id='UserShow'>
          <div id='currentApp'>
            <h5>Current</h5>
            {renderCurrent(props.jobApps)}
          </div>
          <div id='checkedInApp'>
            <h5>Check In</h5>
            {renderWeekCheckup(props.jobApps)}
          </div>
          <div id='responseApp'>
            <h5>Responded</h5>
            {renderResponse(props.jobApps)}
          </div>
          <div id='interviewApp'>
            <h5>Interviewed</h5><br/>
            {renderInterview(props.jobApps)}
          </div>
          <div id='archiveApp'>
            <h5>Archived</h5><br/>
            {renderArchive(props.jobApps)}
          </div>
      </div>
      <div id='emptyending'></div>
      <div id='userButtons'>
        <Button onClick={handleDeleteButton}>
          Delete User
        </Button>{" "}
        <Button onClick={goToEditUser}>
          Edit User
        </Button>
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
