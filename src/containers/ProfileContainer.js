import React from 'react';

import JobAppForm from '../components/JobAppForm.js';
import JobAppDisplay from '../components/JobAppDisplay';
import UserMods from '../components/UserMods';

const ProfileContainer = () => {

  return (
    <div id='userShowContainer'>
      <JobAppForm />
      <JobAppDisplay />
      <UserMods />
    </div>
  )
}

export default ProfileContainer;
