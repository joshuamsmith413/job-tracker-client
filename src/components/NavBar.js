import React from 'react';
import Login from './Login.js';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout, dropApps } from '../actions';
import { Button } from 'react-bootstrap';

const Navbar = props => {

  if (props) {
    const handleLogout = () => {
      localStorage.removeItem("token")
      props.dispatch(logout())
      props.dispatch(dropApps())
      props.history.push('/')
    }

    const loggedinRenderConditions = (user) => user ? <span>Hi {props.currentUser.name} <Button variant="link" onClick={handleLogout}>Logout</Button></span> : <Login />

  const renderHomeLink = () => props.location.pathname.includes('/edit') ? <Button onClick={() => props.history.push('/')} variant="link">Home</Button> : null


    return(
      <div id='Navbar'>
        {loggedinRenderConditions(props.currentUser)}{" "}
        {renderHomeLink()}
        <h4>Job Application Tracker</h4>
      </div>
    )
  //end of component
} else {
  return null
}
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps : state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(Navbar));
