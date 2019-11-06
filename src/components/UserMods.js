import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout, dropApps } from '../actions';
import API from '../API.js';
import { Button } from 'react-bootstrap';

const UserMods = props => {

  const deleteUser = () => {
    API.destroyUser(props.currentUser.id)
    .then(r => r.json())
    .then(data => alert(data.message))
      props.dispatch(logout())
      props.dispatch(dropApps())
      localStorage.removeItem("token")
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

  const goToEditUser = () => {
    props.history.push(`/edit/user/${props.currentUser.id}`)
  }

  return (
    <div id='userButtons'>
      <Button onClick={handleDeleteButton}>
        Delete User
      </Button>{" "}
      <Button onClick={goToEditUser}>
        Edit User
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    jobApps : state.jobApps
  }
}

export default connect(mapStateToProps)(withRouter(UserMods));
