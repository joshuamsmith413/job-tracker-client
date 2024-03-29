import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

    const greeting = user => user ? <p>Hi {props.currentUser.name}</p> : null

    const logoutButton = user => user ? <span><Button variant="link" onClick={handleLogout}>Logout</Button></span> : null

    const renderHomeLink = () => props.location.pathname.includes('/edit') ? <span><Button onClick={() => props.history.push('/')} variant="link">Home</Button></span> : null


    return(
      <div id='nav-bar'>
        {greeting(props.currentUser)}
        <span id='nav-buttons'>
          {logoutButton(props.currentUser)}{' '}
          {renderHomeLink()}
        </span>
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
