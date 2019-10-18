import React from 'react';

import { Link } from 'react-router-dom';

const JobAppDisplay = props => {



  const renderWeekCheckup = (app) => {
    return !app.one_week_checkup ? <p>Don't forget to check in in one week!</p> : <p>Noice</p>
  }


  return(
    <React.Fragment>
      <div className='EditAppLink'>
        <Link to={{ pathname: `/edit/app/${props.app.id}`, state: {app : props.app} }} >Edit App</Link>
      </div>
      <div className='company'>
        <strong>{props.app.company}</strong><br/>
        <small>{props.app.created_at.substring(0, 10)}</small>
      </div>
      <div className='position'>
        {props.app.position}
      </div>
      <div className='contact'>
        {props.app.contact}
      </div>

      <div className='resume'>
        link to Resume modal or something
      </div>
      <div className='weekCheckup'>
        {renderWeekCheckup(props.app)}
      </div>
      <div className='foundOn'>
        {props.app.source}
      </div>
        </React.Fragment>
  )

}

export default JobAppDisplay;
