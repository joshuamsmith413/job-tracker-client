import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { connect } from 'react-redux';
import { login } from './actions';

const token = localStorage.token;
export class App extends React.Component {


  componentDidMount() {
    if (token) {
      return fetch('http://localhost:3000/set_user', {
        headers: {
          Authorization: token
        }
      })
      .then(r => r.json())
      .then(data => {
        this.props.dispatch(login(data))
      })
    }
  }

  render() {

    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}




export default connect()(withRouter(App));
