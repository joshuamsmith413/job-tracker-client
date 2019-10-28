import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout, dropApps } from '../actions';

const Navbar = props => {

  const handleLogout = () => {
    localStorage.removeItem("token")
    props.dispatch(logout())
    props.dispatch(dropApps())
    props.history.push(`/`)
  }

  const authRenderConditions = (pathname) => {
    return pathname !== '/auth' ? <Link to="/auth">Sign Up or Login </Link> : null
  }

  const myJobRenderConditions = pathname => {
    return pathname !== '/profile' ? <Link to='/profile'>My Jobs</Link> : null
  }

  const homeLinkRenderConditions = pathname => {
    return pathname !== '/' ? <Link to='/'>Home</Link> : null
  }

  const loggedinRenderConditions = (user) => {
    if (user) {
      return(
        <span>
          Hi {props.currentUser.name}
          <Link onClick={handleLogout}>Logout</Link>
          {myJobRenderConditions(props.history.location.pathname)}
        </span>
      )
    } else {
      return authRenderConditions(props.history.location.pathname)
    }
  }


  return(
    <div id='Navbar'>
      <span id='loggedin'>
        {loggedinRenderConditions(props.currentUser)}
      </span>
      <span id='homeLink'>
        {homeLinkRenderConditions(props.history.location.pathname)}
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
