import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authLogin = (userName, passWord) => {
  console.log('logging in');
  const credentials = {
    username: userName,
    password: passWord
  };
  return dispatch => {
    // dispatch(authStart());
    console.log('dispatching')
    axios
      .post(
        'http://localhost:8000/api/auth/login'
        // {
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(credentials)
        // }
      )
      .then(res => {
        const token = res.data.key;
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authRegister = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('http://localhost:8000/api/auth/register', {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        localStorage.setItem('token', token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (token === undefined) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
