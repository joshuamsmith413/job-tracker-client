import React from 'react';
import { withRouter } from 'react-router-dom';
import SourceButtons from '../components/SourceButtons.js';
import ProfileContainer from './ProfileContainer.js'

const HomeContainer = (props) => {


  return(
    <div id='homePage'>
      <ProfileContainer />
      {props ? <SourceButtons /> : null}
    </div>
  )
}


export default withRouter(HomeContainer);
