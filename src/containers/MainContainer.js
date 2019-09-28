import React from 'react';
import AuthContainer from './AuthContainer.js';
import Home from '../components/Home.js';
import { Route, withRouter } from 'react-router-dom';

class MainContainer extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(payload => { this.setState({
      users: payload
    })})
  }

  render() {
    console.log(this.state)
    return (
      <div id="MainContainer">
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={AuthContainer} />
      </div>
    )
  };
};

export default withRouter(MainContainer);
