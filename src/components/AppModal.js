import React from 'react';
import { Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../API.js';
import { connect } from 'react-redux';
import { getApps } from '../actions';
import { withRouter } from 'react-router-dom';

function AppModal(props) {

const resumeButton = () => props.app.resume.includes("https") ? <Button target="_blank" rel="noopener noreferrer" href={props.app.resume}> Resume </Button> : null

const updateResponse = async() => {
  const res = await API.updateResponse(props.app)
  const data = await res.json()
  props.dispatch(getApps(data))
  props.onHide()
}

const updateCheckin = async() => {
  const res = await API.updateCheckin(props.app)
  const data = await res.json()
  props.dispatch(getApps(data))
  props.onHide()
}

const updateInterview = async() => {
  const res = await API.updateInterview(props.app)
  const data = await res.json()
  props.dispatch(getApps(data))
  props.onHide()
}

const archiveApp = async() => {
  const res = await API.archiveApp(props.app)
  const data = await res.json()
  props.dispatch(getApps(data))
  props.onHide()
}

const handleAppStatus = () => {
  if(props.app.current && !props.app.interview && !props.app.response && !props.app.one_week_checkup) {
    return (
      <Button onClick={updateCheckin}>
        Checkin?
      </Button>
    )
  }
  else if (props.app.current && !props.app.interview && !props.app.response && props.app.one_week_checkup) {
    return(
      <Button onClick={updateResponse}>
        Response?
      </Button>
    )
  } else if(props.app.current && !props.app.interview && props.app.response && props.app.one_week_checkup) {
    return(
      <div>
        <Button onClick={updateInterview}>
          Interview?
        </Button>
      </div>
    )
  } else if (props.app.current && props.app.interview && props.app.response && props.app.one_week_checkup) {
    return(
      <div>
        <Button onClick={archiveApp}>
          Archive?
        </Button>
      </div>
    )
  }
}


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.app.company} | {props.app.position} | <small>{props.app.created_at.substring(0, 10)}</small>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h6>contact</h6>
      {props.app.contact}
      <h6>Cover Letter </h6>
        <p>
          {props.app.cover_letter}
        </p>
        {handleAppStatus()}
      </Modal.Body>
      <Modal.Footer>
      {resumeButton()}
      <Link to={{ pathname: `/edit/app/${props.app.id}`, state: {app : props.app} }} >
        <Button> Edit App </Button>
      </Link>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect()(withRouter(AppModal));
