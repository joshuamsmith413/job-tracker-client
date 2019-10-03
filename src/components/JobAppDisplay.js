import React from 'react';

class JobAppDisplay extends React.Component {
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
          link to cover letter modal
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
