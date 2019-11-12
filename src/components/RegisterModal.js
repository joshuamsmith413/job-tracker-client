import React, { useState } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Modal, Button} from 'react-bootstrap';
import API from '../API.js';

const RegisterModal = props => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async(e) => {
    e.preventDefault()
    const newUser = {name, password}
    const res = await API.createUser(newUser)
    const datas = await res.json()
     if(!datas.error) {
        const response = await API.login(newUser)
        const data = await response.json()
        if (data.error) {
          setError(data.error)
        } else if (data.id) {
          props.dispatch(login(data))
          localStorage.setItem('token', data.token)
        }
     } else {
       alert(`${datas.error}`);
       setName('');
       setPassword('');
     }
  }

  const renderError = () => error ? <div className='error'>{error}</div> : null

  const handleNameInput = e => setName(e.target.value)

  const handlePasswordInput = e => setPassword(e.target.value)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span id='RegisterModal'>
      <Button variant="link" onClick={handleShow}>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="signup-form" onSubmit={handleSignUp}>
            <label> Username: </label>{' '}
            <input type="text" name="name" value={name} onChange={handleNameInput}></input><br/>
            <label> Password: </label>{' '}
            <input type="password" name="password" value={password} onChange={handlePasswordInput}></input>
            {renderError()}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignUp}>
            Register User
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  )
}

export default connect()(RegisterModal);
