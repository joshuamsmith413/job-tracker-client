import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout, dropApps } from '../actions';

class Navbar extends React.Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.dispatch(logout())
    this.props.dispatch(dropApps())
    this.props.history.push(`/`)
  }

  authRenderConditions = (pathname) => {
    return pathname !== '/auth' ? <Link to="/auth">Sign Up or Login </Link> : null
  }

  myJobRenderConditions = pathname => {
    return pathname !== '/profile' ? <Link to='/profile'>My Jobs</Link> : null
  }

  homePageRenderConditions = pathname => {
    return pathname !== '/' ? <Link to='/'>Home</Link> : null
  }

  loggedinRenderConditions = (user) => {
    if (user.name) {
      return(
        <span>
          Hi {this.props.currentUser.name}
          <button onClick={this.handleLogout}>Logout</button>
          {this.myJobRenderConditions(this.props.history.location.pathname)}
        </span>
      )
    } else {
      return this.authRenderConditions(this.props.history.location.pathname)
    }
  }

  render() {
    return(
      <div id='Navbar'>
        {this.loggedinRenderConditions(this.props.currentUser)}
        {this.homePageRenderConditions(this.props.history.location.pathname)}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        jobApps : state.jobApps
    }
}

export default connect(mapStateToProps)(withRouter(Navbar));
