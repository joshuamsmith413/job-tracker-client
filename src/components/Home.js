import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Home extends React.Component {

  render() {
    return(
      <div>
        Home <br/>
        <Link to="/auth">Sign Up or Login </Link>
      </div>
    )
  }
}

export default withRouter(Home);
