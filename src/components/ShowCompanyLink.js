import React, {useState} from 'react';
import AppModal from './AppModal.js';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ShowCompanyLink = props => {

  const [modalShow, setModalShow] = useState(false)

  return (
    <div className="ShowCompanyLink" key={props.app.id}>
      <Button variant='link' onClick={() => setModalShow(true)}>
        {props.app.company}
      </Button >
      <AppModal
        show={modalShow}
        app={props.app}
        onHide={() => setModalShow(false)}
      />
  </div>
  )
}


export default withRouter(ShowCompanyLink);
