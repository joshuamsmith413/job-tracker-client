import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApps } from '../actions';
import API from '../API.js';
import { Button } from 'react-bootstrap';

const EditApp = props => {

  const [company, setCompany] = useState('');
  const [cover, setCover] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState('');
  const [source, setSource] = useState('');
  const [resume, setResume] = useState('');
  console.log(props)

  useEffect(() => {
    setCompany(props.location.state.app.company);
    setCover(props.location.state.app.cover_letter);
    setContact(props.location.state.app.contact);
    setPosition(props.location.state.app.position);
    setSource(props.location.state.app.source);
    setResume(props.location.state.app.resume);
  }, [props.location.state.app.company, props.location.state.app.cover_letter, props.location.state.app.contact, props.location.state.app.position, props.location.state.app.source, props.location.state.app.resume])

  const handleCompanyInput = e => setCompany(e.target.value)

  const handleCoverInput = e => setCover(e.target.value)

  const handleContactInput = e => setContact(e.target.value)

  const handlePositionInput = e => setPosition(e.target.value)

  const handleSourceInput = e => setSource(e.target.value)

  const handleResumeInput = e => setResume(e.target.value)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const params = {company, cover, contact, position, source, resume}
    const response = await API.updateApp(params, props.location.state.app.id)
    const data = await response.json()
      props.dispatch(getApps(data))
      props.history.push(`/`)
  }

  return(
    <div id="EditApp">
    <form onSubmit={handleSubmit}>
      <label>Company Name:</label>
        <input type='text' name='company' value={company} onChange={handleCompanyInput}/><br/>
      <label>Contact:</label>
        <input type='text' name='contact' value={contact} onChange={handleContactInput} /><br/>
      <label>Position:</label>
        <input type='text' name='position' value={position} onChange={handlePositionInput} /><br/>
      <label>Found on:</label>
        <select name="source" onChange={handleSourceInput} value={source}>
          <option value="https://www.linkedin.com">Linkedin</option>
          <option value="https://www.angel.co">Angel List</option>
          <option value="https://www.google.com">Google</option>
          <option value="https://www.indeed.com">Indeed</option>
        </select><br/>
      <label> Link to Resume:</label>
        <input type='text' name='resume' value={resume} onChange={handleResumeInput} /><br/>
      <label>Paste Cover Letter:</label><br/>
        <textarea name='cover' value={cover} onChange={handleCoverInput}/><br/>
      <Button type='submit'>Submit</Button>
    </form>
    </div>
  )
}

export default connect()(withRouter(EditApp));
