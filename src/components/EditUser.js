import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout, dropApps } from '../actions';
import API from '../API.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Button } from 'react-bootstrap';

const EditUser = props => {

  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setOldPassword] = useState('');
  const [error, setError] = useState('')


  if (props.currentUser) {
    if (name === '') {
      setName(props.currentUser.name)
    }

    const handleNameInput = e => setName(e.target.value)

    const handleOldPasswordInput = e => setOldPassword(e.target.value)

    const handleNewPasswordInput = e => setNewPassword(e.target.value)

    const handleSubmit = async(e) => {
      e.preventDefault();
      const params = {name, password, newPassword}
      const response = await API.updateUser(params, props.currentUser.id)
      const data = await response.json()
      return data.error ? setError(data.error) : (props.dispatch(login(data)), props.history.push(`/`))
    }

    const deleteUser = async() => {
      API.destroyUser(props.currentUser.id)
      props.dispatch(logout())
      localStorage.removeItem("token")
      props.dispatch(dropApps())
      props.history.push(`/`)
    }

    const handleDeleteButton = () => {
      confirmAlert({
       title: 'Confirm to Delete',
       message: 'Are you sure to do this.',
       buttons: [
        {
          label: 'Yes',
          onClick: () => deleteUser()
        },
        {
          label: 'No',
          onClick: () => null
        }
       ]
     });
    }

    const renderError = () => error ? <div className='error'>{error}</div> : null

    return(
      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <label>Edit Name</label>
            <input type='text' value={name} onChange={handleNameInput}/><br/>
          <label>Enter Current Password</label>
            <input type='password' value={password} onChange={handleOldPasswordInput}/><br/>
          <label>Enter New Password</label>
            <input type='password' value={newPassword} onChange={handleNewPasswordInput}/><br/>
            <Button type='submit'>Submit </Button>
        <Button onClick={handleDeleteButton}>
          Delete User
        </Button>
        {renderError()}
      </form>
      </div>
    )
  } else {
    return null
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(EditUser));
