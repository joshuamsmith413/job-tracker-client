import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';

function App() {

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default withRouter(App);
