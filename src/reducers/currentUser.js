const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_IN':
      return state = action.payload;
      case 'LOG_OUT':
      return state = {};
    default:
    return state;
  }
}

export default currentUserReducer;
