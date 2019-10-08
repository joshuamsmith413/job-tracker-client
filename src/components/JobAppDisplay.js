import React from 'react';
import CoverLetterModal from './CoverLetterModal';
import { Button } from 'react-bootstrap';



class JobAppDisplay extends React.Component {
  state = {
    modalShow: false,
    setModalShow: false
  }
  renderWeekCheckup = (app) => {
    return !app.one_week_checkup ? <p>Don't forget to check in in one week!</p> : null
  }



  render() {

    return(
      <React.Fragment>
        <div className='company'>
          <strong>{this.props.app.company}</strong><br/>
          <small>{this.props.app.created_at.substring(0, 10)}</small>
        </div>
        <div className='position'>
          {this.props.app.position}
        </div>
        <div className='contact'>
          {this.props.app.contact}
        </div>
        <div className='coverLetter'>
          <Button variant='link' onClick={() => this.setState({modalShow: true})}>
            Cover Letter
          </Button>
          <CoverLetterModal
            show={this.state.modalShow}
            app={this.props.app}
            onHide={() => this.setState({modalShow: false})}
          />
        </div>
        <div className='resume'>
          link to Resume modal or something
        </div>
        <div className='weekCheckup'>
          {this.renderWeekCheckup(this.props.app)}
        </div>
        <div className='foundOn'>
          {this.props.app.source}
        </div>
          </React.Fragment>
    )
  }
}

export default JobAppDisplay;




// <div className='coverLetter'>
//   cover letter: {this.props.app.cover_letter}
// </div>
