import React from 'react';
import { withRouter } from 'react-router-dom';
import SourceButtons from '../components/SourceButtons.js';

const HomeContainer = (props) => {


  return(
    <div id='homePage'>
      <div id='greeting'>
        <h5>
          Welcome to Job Application Tracker
        </h5>
        <SourceButtons />
      </div>
    </div>
  )
}


export default withRouter(HomeContainer);
