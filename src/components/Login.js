import React from 'react';


class Login extends React.Component {




  render() {
    return(
      <div id="Login">
        <form onSubmit={this.props.handleLogin}>
          <h3>Login</h3>
          <label> Username: </label>
          <input type="text" name="name" value={this.props.newUser.fields.name} onChange={this.props.handleChange}></input>
          <label> Password: </label>
          <input type="password" name="password" value={this.props.newUser.fields.password} onChange={this.props.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default Login;
