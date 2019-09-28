import React from 'react';

class SignUp extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div id="signup" >
        <h3>Sign Up</h3>
        <form id="signup-form" onSubmit={this.props.handleSignUp}>
          <label> Username: </label>
          <input type="text" name="name" value={this.props.fields.name} onChange={this.props.handleChange}></input>
          <label> Password: </label>
          <input type="password" name="password" value={this.props.fields.password} onChange={this.props.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default SignUp;
