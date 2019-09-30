import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';

class App extends React.Component {
  state = {
    currentUser: {},
      newUser: {
        fields: {
          name: "",
          password: ""
        },
        error: ""
      }
  }

  handleChange = e => {
    console.log(this.state.newUser.fields)
    const userInfo = { ...this.state.newUser.fields, [e.target.name]: e.target.value };
    this.setState({ newUser: {fields: userInfo} });
  }

  handleLogin = e => {
    e.preventDefault()
    debugger
    console.log(this.state.newUser.fields)
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.newUser.fields)
    })
    .then(r => r.json())
    .then(data => {
      this.setState({currentUser: data})
    })
    .then(this.props.history.push(`/`))
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <MainContainer handleLogin={this.handleLogin} handleChange={this.handleChange} newUser={this.state.newUser}/>
      </div>
    );
  }
}

export default withRouter(App);
