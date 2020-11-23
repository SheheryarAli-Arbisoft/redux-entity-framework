import { callApi, METHOD_POST } from '../../api';
import { loadUser } from '../entities/users/actions';

const API_URL = '/api/users';
export const AUTHENTICATION_REQUEST = 'authentication/AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'authentication/AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_LOGOUT = 'authentication/AUTHENTICATION_LOGOUT';
export const AUTHENTICATION_ERROR = 'authentication/AUTHENTICATION_ERROR';

const setIsLoading = () => ({
  type: AUTHENTICATION_REQUEST,
});

const authenticationSuccess = userId => ({
  type: AUTHENTICATION_SUCCESS,
  payload: userId,
});

export const logout = () => {
  localStorage.removeItem('auth-token');
  return {
    type: AUTHENTICATION_LOGOUT,
  };
};

const errorOccurred = err => {
  localStorage.removeItem('auth-token');
  return {
    type: AUTHENTICATION_ERROR,
    payload: {
      msg: err.response.statusText,
      status: err.response.status,
    },
  };
};

export const registerUser = values => async dispatch => {
  dispatch(setIsLoading());
  try {
    const res = await callApi(METHOD_POST, `${API_URL}/register`, values);
    localStorage.setItem('auth-token', res.token);
    const userId = await dispatch(loadUser());
    dispatch(authenticationSuccess(userId));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};

export const loginUser = values => async dispatch => {
  dispatch(setIsLoading());
  try {
    const res = await callApi(METHOD_POST, `${API_URL}/login`, values);
    localStorage.setItem('auth-token', res.token);
    const userId = await dispatch(loadUser());
    dispatch(authenticationSuccess(userId));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};

export const loginCurrentUser = () => async dispatch => {
  dispatch(setIsLoading());
  try {
    const userId = await dispatch(loadUser());
    dispatch(authenticationSuccess(userId));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
