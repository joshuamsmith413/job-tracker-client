const jobAppsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_APPS':
      return state = action.payload;
      case 'ADD_APP':
      return state = [...state, action.payload];
      case 'DROP_APPS':
      return state = [];
    default:
    return state;
  }
}

export default jobAppsReducer;
