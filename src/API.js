const BASEAPI = 'http://localhost:3000/'
// JOB APPLICATION
const createJobApp = params => {
  return fetch(`${BASEAPI}job_applications`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const getUserApps = params => {
  return fetch(`${BASEAPI}job_applications/get_apps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateApp = (params, appId) => {
  return fetch(`${BASEAPI}job_applications/${appId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateCheckin = params => {
  return fetch(`${BASEAPI}job_applications/update_weekCheckup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateInterview = params => {
  return fetch(`${BASEAPI}job_applications/update_interview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateResponse = params => {
  return fetch(`${BASEAPI}job_applications/update_response`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const archiveApp = params => {
  return fetch(`${BASEAPI}job_applications/archive_app`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// USERS

const login = (params) => {
  return fetch(`${BASEAPI}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const autoLogin = token => {
  return fetch(`${BASEAPI}set_user`, {
    headers: {
      Authorization: token
    }
  })
}

const createUser = params => {
  return fetch(`${BASEAPI}users`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateUser = (params, userId) => {
  return fetch(`${BASEAPI}users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const destroyUser = userId => {
  return fetch(`${BASEAPI}users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userId)
  })
}

const API = {
  createJobApp,
  getUserApps,
  updateApp,
  updateCheckin,
  updateInterview,
  updateResponse,
  archiveApp,
  createUser,
  login,
  autoLogin,
  updateUser,
  destroyUser
}

export default API;
