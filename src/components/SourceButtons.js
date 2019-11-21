import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const SourceButtons = props => {

  if(props.apps) {

    const uniqueSources = apps => {
      const stack = []
      if (apps.length > 1) {
        apps.forEach(app => {
          if (!stack.includes(app.source)) {
            stack.push(app.source)
          }
        })
        return stack
      } else {
        return apps
      }
    }

    const renderButtons = sources => {
      if (sources.length > 1) {
        return sources.map(source => {
          const buttonName = source.match(/\.([^\.]+)\./)
          console.log(source)
          return (
            <div className="jobSites-buttons" key={sources.indexOf(source)}>
              <Button href={`${source}`} target="_blank" rel="noopener noreferrer">{buttonName[1]}</Button>
            </div>
          )
        })
      } else if (sources.length === 1) {
        const buttonName = sources[0].match(/\.([^\.]+)\./)
        console.log(buttonName[1])
        return (
          <div className="jobSites-buttons">
            <Button href={`${sources[0]}`} target="_blank" rel="noopener noreferrer">{buttonName[1]}</Button>
          </div>
        )
      }
    }

    const handleGreeting = (currentUser, apps) => {
      if (currentUser && apps.length > 0) {
        return <h5>Your Job searching websites</h5>
      } else if (currentUser && apps.length === 0) {
        return <h5>Add applications to see your most used job searching websites</h5>
      } else if (!currentUser && apps.length === 0) {
        return <h5>Login in to see your most used job searching websites</h5>
      }
    }

    return(
      <div id="jobSites">
        {handleGreeting(props.currentUser, props.apps)}
        {renderButtons(uniqueSources(props.apps))}
      </div>
    )
    //ends component
  } else {
    return null
  }
}

const mapStateToProps = (state) =>{
  return {
    apps: state.jobApps,
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(SourceButtons);
