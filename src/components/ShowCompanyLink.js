import React, {useState} from 'react';
import AppModal from './AppModal.js';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ShowCompanyLink = props => {

  const [modalShow, setModalShow] = useState(false)

  return (
    <React.Fragment>
      <Button variant='link' onClick={() => setModalShow(true)}>
        {props.app.company}
      </Button>
      <AppModal
        show={modalShow}
        app={props.app}
        onHide={() => setModalShow(false)}
      />
  </React.Fragment>
  )
}


export default withRouter(ShowCompanyLink);
