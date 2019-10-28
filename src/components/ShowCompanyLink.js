import React, {useState} from 'react';
import AppModal from './AppModal.js';
import { withRouter, Link } from 'react-router-dom';

const ShowCompanyLink = props => {

  const [modalShow, setModalShow] = useState(false)

  return (
    <div className="ShowCompanyLink" key={props.app.id}>
      <Link onClick={() => setModalShow(true)}>
        {props.app.company}
      </Link>
      <AppModal
        show={modalShow}
        app={props.app}
        onHide={() => setModalShow(false)}
      />
  </div>
  )
}


export default withRouter(ShowCompanyLink);
