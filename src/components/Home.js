import React from 'react';
import { withRouter } from 'react-router-dom';
import SourceButtons from './SourceButtons.js';

const Home = (props) => {


  return(
    <div id='homePage'>
      <div id='greeting'>
        <h5>
          Welcome to first day of the rest of your life! Apply to a new job now!
        </h5>
        <SourceButtons />
      </div>
    </div>
  )
}


export default withRouter(Home);
