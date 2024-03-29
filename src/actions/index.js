export const login = (user) => {
  return {
    type: 'LOGIN_IN',
    payload: user
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT',
    payload: null
  }
}

export const getApps = (app) => {
  return {
    type: 'GET_APPS',
    payload: app
  }
}

export const addApp = (app) => {
  return {
    type: "ADD_APP",
    payload: app
  }
}

export const dropApps = () => {
  return {
    type: 'DROP_APPS'
  }
}
