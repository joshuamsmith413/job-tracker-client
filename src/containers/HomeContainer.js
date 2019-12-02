import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileContainer from './ProfileContainer.js'

const HomeContainer = (props) => {


  return(
    <div id='home-container'>
      <ProfileContainer />
    </div>
  )
}


export default withRouter(HomeContainer);
