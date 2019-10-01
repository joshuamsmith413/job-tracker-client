const jobAppsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_APPS':
      return action.payload;
      case 'ADD_APP':
      return state = [...state, action.payload];
    default:
    return state;
  }
}

export default jobAppsReducer;
