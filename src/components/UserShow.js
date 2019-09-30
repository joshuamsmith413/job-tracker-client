import React from 'react';

class UserShow extends React.Component {

  render() {
    return(
      <div id='UserShow'>
        {`hello from ${this.props.currentUser.name}`}
      </div>
    )
  }
}

export default UserShow;
