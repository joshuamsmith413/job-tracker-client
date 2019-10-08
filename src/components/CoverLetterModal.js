import React from 'react';
import { Modal, Button} from 'react-bootstrap';

export default function coverLetter(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.app.company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.app.cover_letter}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
