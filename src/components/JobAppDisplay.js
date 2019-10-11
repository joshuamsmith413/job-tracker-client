import React, { useState } from 'react';
import CoverLetterModal from './CoverLetterModal';
import { Button } from 'react-bootstrap';



const JobAppDisplay = props => {

  const [modalShow, setModalShow] = useState(false)

  const renderWeekCheckup = (app) => {
    return !app.one_week_checkup ? <p>Don't forget to check in in one week!</p> : <p>Noice</p>
  }


  return(
    <React.Fragment>
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
      <div className='coverLetter'>
        <Button variant='link' onClick={() => setModalShow(true)}>
          Cover Letter
        </Button>
        <CoverLetterModal
          show={modalShow}
          app={props.app}
          onHide={() => setModalShow(false)}
        />
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
