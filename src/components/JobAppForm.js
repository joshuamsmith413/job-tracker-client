import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addApp } from '../actions';
import API from '../API.js';
import { Button } from 'react-bootstrap';

const JobAppForm = props => {

  const [company, setCompany] = useState('');
  const [cover, setCover] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState('');
  const [source, setSource] = useState('');
  const [resume, setResume] = useState('');

  const resetform = () => {
    setCompany('');
    setCover('');
    setContact('');
    setPosition('');
    setSource('');
    setResume('');
  }

  const handleCompanyInput = e => {
    setCompany(e.target.value)
  }

  const handleCoverInput = e => {
    setCover(e.target.value)
  }

  const handleContactInput = e => {
    setContact(e.target.value)
  }

  const handlePositionInput = e => {
    setPosition(e.target.value)
  }

  const handleSourceInput = e => {
    setSource(e.target.value)
  }

  const handleResumeInput = e => {
    setResume(e.target.value)
  }

  const handleNewApp = e => {
    e.preventDefault()
    const userId = props.currentUser.id
    const params = {userId, company, cover, contact, position, source, resume}
    API.createJobApp(params)
    .then(r => r.json())
    .then(data => {
      props.dispatch(addApp(data))
    })
    .then(resetform())
  }

  return(
    <div id='JobAppForm'>
      <h5>Add App</h5>
      <form id="formapp" onSubmit={handleNewApp}>
        <label>Company Name:</label><br/>
          <input type='text' name='company' value={company} onChange={handleCompanyInput}/><br/>
        <label>Contact:</label><br/>
          <input type='text' name='contact' value={contact} onChange={handleContactInput} /><br/>
        <label>Position:</label><br/>
          <input type='text' name='position' value={position} onChange={handlePositionInput} /><br/>
        <label>Found on:</label><br/>
          <input type='text' name='source' value={source} onChange={handleSourceInput}/><br/>
        <label>Link To Resume:</label><br/>
          <input type='text' name='resume' value={resume} onChange={handleResumeInput} /><br/>
        <label>Paste Cover Letter:</label><br/>
          <textarea name='cover' value={cover} onChange={handleCoverInput}/><br/>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )

}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps: state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(JobAppForm));
