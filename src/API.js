
// JOB APPLICATION
const createJobApp = params => {
  return fetch('http://localhost:3000/job_applications', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const getUserApps = params => {
  return fetch('http://localhost:3000/job_applications/get_apps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateApp = (params, appId) => {
  return fetch(`http://localhost:3000/job_applications/${appId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

// USERS

const login = params => {
  return fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const autoLogin = token => {
  return fetch('http://localhost:3000/set_user', {
    headers: {
      Authorization: token
    }
  })
}

const createUser = params => {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const updateUser = (params, userId) => {
  return fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(params)
  })
}

const destroyUser = userId => {
  return fetch(`http://localhost:3000/users/${userId}`, {
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
  createUser,
  login,
  autoLogin,
  updateUser,
  destroyUser
}

export default API;
