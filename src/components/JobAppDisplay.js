import React from 'react';
import ShowCompanyLink from './ShowCompanyLink.js';
import { connect } from 'react-redux';

const JobAppDisplay = props => {

  if (props) {
    const renderCurrent = apps => {
      if(apps.length > 0) {
        return apps.map(app => {
          if(app.current && !app.interview && !app.response && !app.one_week_checkup) {
            return(
              <div className='company-link'>
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
              <div className='company-link'>
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
              <div className='company-link'>
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
              <div className='company-link'>
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
              <div className='company-link'>
                <ShowCompanyLink app={app} />
              </div>
            )
          }
        })
      }
    }

    return (
      <div id='JobAppDisplay'>
          <div className='JobAppDisplay-child' id='currentApp'>
            <h5>Current</h5>
            {renderCurrent(props.jobApps)}
          </div>
          <div className='JobAppDisplay-child' id='checkedInApp'>
            <h5>Checkin</h5>
            {renderWeekCheckup(props.jobApps)}
          </div>
          <div className='JobAppDisplay-child' id='responseApp'>
            <h5>Responded</h5>
            {renderResponse(props.jobApps)}
          </div>
          <div className='JobAppDisplay-child' id='interviewApp'>
            <h5>Interviewed</h5><br/>
            {renderInterview(props.jobApps)}
          </div>
          <div className='JobAppDisplay-child' id='archiveApp'>
            <h5>Archived</h5><br/>
            {renderArchive(props.jobApps)}
          </div>
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

export default connect(mapStateToProps)(JobAppDisplay);
