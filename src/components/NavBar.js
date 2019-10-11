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

  const homePageRenderConditions = pathname => {
    return pathname !== '/' ? <Link to='/'>Home</Link> : null
  }

  const loggedinRenderConditions = (user) => {
    if (user) {
      return(
        <span>
          Hi {props.currentUser.name}
          <button onClick={handleLogout}>Logout</button>
          {myJobRenderConditions(props.history.location.pathname)}
        </span>
      )
    } else {
      return authRenderConditions(props.history.location.pathname)
    }
  }


  return(
    <div id='Navbar'>
      {loggedinRenderConditions(props.currentUser)}
      {homePageRenderConditions(props.history.location.pathname)}
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
