import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addApp } from '../actions';

class JobAppForm extends React.Component {

  state = {
    company: '',
    cover: '',
    contact: '',
    position: '',
    source: '',
    resume: ''
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleNewApp = e => {
    e.preventDefault()
    document.getElementById("formapp").reset()
    const params = {...this.state, user_id: this.props.currentUser.id}
    console.log(params)
    fetch('http://localhost:3000/job_applications', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(r => r.json())
    .then(data => {
      this.props.dispatch(addApp(data))
    })
    .then(this.setState())
  }

  // displayApps = apps => {
  //   return apps.map(app => {
  //     if (this.props.currentUser && this.props.currentUser.id === app.user_id)
  //     return <div>{app.company}</div>
  //   })
  // }
  // {this.displayApps(this.props.jobApps)}

  render() {
    return(
      <div id='JobAppForm'>
        <h3>Add an App</h3>
        <form id="formapp" onSubmit={this.handleNewApp}>
          <label>Company Name:</label>
            <input type='text' name='company' value={this.state.company} onChange={this.handleChange}/>
          <label>Contact:</label>
            <input type='text' name='contact' value={this.state.contact} onChange={this.handleChange} />
          <label>Position:</label>
            <input type='text' name='position' value={this.state.position} onChange={this.handleChange} />
          <label>Found on:</label>
            <input type='text' name='source' value={this.state.source} onChange={this.handleChange}/>
          <label>Resume:</label>
            <input type='text' name='resume' value={this.state.resume} onChange={this.handleChange} />
          <label>Cover Letter:</label>
            <textarea name='cover' value={this.state.cover} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps: state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(JobAppForm));
