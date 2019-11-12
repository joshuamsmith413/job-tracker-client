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
  const handleCompanyInput = e => setCompany(e.target.value)

  const handleCoverInput = e => setCover(e.target.value)

  const handleContactInput = e => setContact(e.target.value)

  const handlePositionInput = e => setPosition(e.target.value)

  const handleSourceInput = e => setSource(e.target.value)

  const handleResumeInput = e => setResume(e.target.value)

  const handleNewApp = async(e) => {
    e.preventDefault()
    const userId = props.currentUser.id
    const params = {userId, company, cover, contact, position, source, resume}
    const response = await API.createJobApp(params)
    const data = await response.json()
      props.dispatch(addApp(data))
      resetform()
  }

  return(
    <div id='JobAppForm'>
      <h5>Add App</h5>
      <form id="formapp" onSubmit={handleNewApp}>
        <label>Company Name:</label><br/>
          <input type='text' name='company' placeholder="Company" value={company} onChange={handleCompanyInput}/><br/>
        <label>Contact:</label><br/>
          <input type='text' name='contact' placeholder='Contact' value={contact} onChange={handleContactInput} /><br/>
        <label>Position:</label><br/>
          <input type='text' name='position' placeholder='Position' value={position} onChange={handlePositionInput} /><br/>
        <label>Found on:</label><br/>
            <select name="source" onChange={handleSourceInput} value={source}>
              <option></option>
              <option value="https://www.linkedin.com">Linkedin</option>
              <option value="https://www.angel.co">Angel List</option>
              <option value="https://www.google.com">Google</option>
              <option value="https://www.indeed.com">Indeed</option>
            </select><br/>
        <label>Link To Resume:</label><br/>
          <input type='text' name='resume' placeholder='resume' value={resume} onChange={handleResumeInput} /><br/>
        <label>Cover Letter:</label><br/>
          <textarea name='cover' placeholder='Paste Here' value={cover} onChange={handleCoverInput}/><br/>
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
