import React from 'react';
import ShowCompanyLink from './ShowCompanyLink.js';
import { connect } from 'react-redux';

const JobAppDisplay = props => {



    const renderCurrent = apps => {
      if(apps.length > 0) {
        return apps.map(app => {
          if(app.current && !app.interview && !app.response && !app.one_week_checkup) {
            return(
              <div className='company-link' key={app.id}>
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
              <div className='company-link' key={app.id}>
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
              <div className='company-link' key={app.id}>
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
              <div className='company-link' key={app.id}>
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
              <div className='company-link' key={app.id}>
                <ShowCompanyLink app={app} />
              </div>
            )
          }
        })
      }
    }

    return (
      <div id='job-app-display'>
          <div className='job-app-display-child' id='current-app'>
            <h5>Current</h5>
            {renderCurrent(props.jobApps)}
          </div>
          <div className='job-app-display-child' id='checked-in-app'>
            <h5>Checkin</h5>
            {renderWeekCheckup(props.jobApps)}
          </div>
          <div className='job-app-display-child' id='response-app'>
            <h5>Responded</h5>
            {renderResponse(props.jobApps)}
          </div>
          <div className='job-app-display-child' id='interview-app'>
            <h5>Interviewed</h5>
            {renderInterview(props.jobApps)}
          </div>
          <div className='job-app-display-child' id='archive-app'>
            <h5>Archived</h5>
            {renderArchive(props.jobApps)}
          </div>
      </div>
    )

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    jobApps : state.jobApps
  }
}

export default connect(mapStateToProps)(JobAppDisplay);
