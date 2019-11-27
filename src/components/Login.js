import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RegisterModal from './RegisterModal';
import API from '../API.js';

const Login = props => {

  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameInput = e => setName(e.target.value)

  const handlePasswordInput = e => setPassword(e.target.value)

  const handleLogin = async(e) => {
    e.preventDefault()
    const params = {name, password}
    const response = await API.login(params)
    const data = await response.json()
    if (data.error) {
      setError(data.error)
    } else if (data.id) {
      props.dispatch(login(data))
      localStorage.setItem('token', data.token)
    }
  }

  const renderError = () => error ? <div className='error'>{error}</div> : null

  return(
    <div className='form-div'>
      <form onSubmit={handleLogin}>
        <label> Username: </label>
        <input type="text" name="name" value={name} onChange={handleNameInput}></input><br/>
        <label> Password: </label>
        <input type="password" name="password" value={password} onChange={handlePasswordInput}></input> <br/>
        <Button type="submit">Login</Button>
        <RegisterModal show={modalShow} onHide={() => setModalShow(false)}/>
        {renderError()}
      </form>
    </div>
  )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(Login));
