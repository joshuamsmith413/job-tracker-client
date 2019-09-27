import React from 'react';

class SignUp extends React.Component {
  state = {
    name: "",
    password: ""
  }


  handleChange = e => {
    e.persist()
    console.log(this.state)
    this.setState( prevState => {
      return { [e.target.id]: e.target.value }
    })
  }

 handleSubmit = e => {
   e.preventDefault()
   console.log("what you entered",this.state);
   fetch('http://localhost:3000/users', {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
     body: JSON.stringify(this.state)
   })
   .then(r => r.json())
   .then(data => {
      console.log("giving you:",data)
      
   })

   }


  render() {
    return (
      <div id="signup" >
        <form onSubmit={this.handleSubmit}>
          <label> Username: </label>
          <input type="text" id="name" value={this.state.username} onChange={this.handleChange}></input>
          <label> Password: </label>
          <input type="password" id="password" value={this.state.password} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default SignUp;
