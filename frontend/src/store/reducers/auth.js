import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

// import { USER_LOADED, USER_LOADED, AUTH_ERROR } from '../actions/types';

const initialState = {
  token: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case USER_LOADING:
//       return {
//         ...state,
//         isLoading: true;
//       }
//       case USER_LOADED:
//         return {
//           ...state,
//           isAuthenticated: true,
//           isLoading: false,
//           user: action.payload
//         }
// case AUTH_ERROR:
//   localStorage.removeItem('token');
//   return {
//     ...state,
//     token: null,
//     user: null;
//     isAuthenticated:false;
//     isLoading: false
//   }
//     default:
//       return state;
//   }
// }
