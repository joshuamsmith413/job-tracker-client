const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_IN':
      return state = action.payload;
    default:
    return state;
  }
}

export default currentUserReducer;
