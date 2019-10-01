import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import JobAppForm from './JobAppForm.js'



class UserShow extends React.Component {

  render() {
    console.log(this.props)
    return(
      <div id='UserShow'>
        {`hello from ${this.props.currentUser.name}`}
        <JobAppForm />
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(UserShow));
