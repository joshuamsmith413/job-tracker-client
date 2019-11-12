import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import API from '../API.js';

const EditUser = props => {

  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setOldPassword] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    setName(props.currentUser.name)
  }, [props.currentUser.name])

  const handleNameInput = e => {
    setName(e.target.value)
  }

  const handleOldPasswordInput = e => {
    setOldPassword(e.target.value)
  }

  const handleNewPasswordInput = e => {
    setNewPassword(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const params = {name, password, newPassword}
    const response = await API.updateUser(params, props.currentUser.id)
    const data = await response.json()
    if (data.error) {
      setError(data.error)
    } else {
      props.dispatch(login(data))
      props.history.push(`/profile`)
    }
  }

  const renderError = () => {
    return error ? <div className='error'>{error}</div> : null
  }

  return(
    <div id='edit-user'>
      <form onSubmit={handleSubmit}>
        <label>Edit Name</label>
          <input type='text' value={name} onChange={handleNameInput}/>
        <label>Enter Current Password</label>
          <input type='password' value={password} onChange={handleOldPasswordInput}/>
        <label>Enter New Password</label>
          <input type='password' value={newPassword} onChange={handleNewPasswordInput}/>
          <input type='submit'/>
      </form>
      {renderError()}
    </div>
  )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(EditUser));
