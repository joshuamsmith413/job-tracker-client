import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { connect } from 'react-redux';

class App extends React.Component {




  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}




export default connect()(withRouter(App));
