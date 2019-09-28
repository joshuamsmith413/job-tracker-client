import React from 'react';

class SignUp extends React.Component {

  render() {
    return (
      <div id="signup" >
        <h3>Sign Up</h3>
        <form onSubmit={this.props.handleSignUp}>
          <label> Username: </label>
          <input type="text" className="name" value={this.props.name} onChange={this.props.handleChange}></input>
          <label> Password: </label>
          <input type="password" className="password" value={this.props.password} onChange={this.props.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default SignUp;
