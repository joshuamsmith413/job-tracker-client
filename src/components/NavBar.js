import React from 'react';
import Login from './Login.js';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout, dropApps } from '../actions';


const Navbar = props => {

  const handleLogout = () => {
    localStorage.removeItem("token")
    props.dispatch(logout())
    props.dispatch(dropApps())
  }

  const loggedinRenderConditions = (user) => user ? <span>Hi {props.currentUser.name} {' '}<Link onClick={handleLogout}>Logout</Link></span> : <Login />


  return(
    <div id='Navbar'>
      <span id='loggedin'>
        {loggedinRenderConditions(props.currentUser)}
      </span>
    </div>
  )

}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps : state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(Navbar));
