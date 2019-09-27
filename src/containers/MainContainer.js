import React from 'react';
import SignUp from '../components/SignUp.js';


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
        <SignUp />
      </div>
    )
  };
};

export default MainContainer;
