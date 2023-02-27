import { combineReducers } from "redux";

function createAuthReducer() {
  const user = (state = null, action) => {
    switch(action.type) {
      case 'AUTH_ON_ERROR':
      case 'AUTH_ON_INIT':
        return null;
      case 'AUTH_ON_SUCCESS':
        return action.user;
      default:
        return state
    }
  }
  
  const isChecking = (state = false, action) => {
    switch(action.type) {
      case 'AUTH_ON_INIT':
      case 'AUTH_REGISTER_INIT':
      case 'AUTH_LOGIN_INIT':
        return true;
      case 'AUTH_ON_ERROR':
      case 'AUTH_ON_SUCCESS':
        return false;
      default:
        return state
    }
  }
  
  return combineReducers({
    user,
    isChecking
  })
}

export default createAuthReducer();