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

const authenticationSuccess = (payload = null) => ({
  type: AUTHENTICATION_SUCCESS,
  payload,
});

const errorOccurred = err => ({
  type: AUTHENTICATION_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const logout = () => ({
  type: AUTHENTICATION_LOGOUT,
});

export const registerUser = values => async dispatch => {
  dispatch(setIsLoading());
  try {
    const res = await callApi(METHOD_POST, `${API_URL}/register`, values);
    await dispatch(loadUser());
    dispatch(authenticationSuccess(res.token));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};

export const loginUser = values => async dispatch => {
  dispatch(setIsLoading());
  try {
    const res = await callApi(METHOD_POST, `${API_URL}/login`, values);
    dispatch(authenticationSuccess(res.token));
    await dispatch(loadUser());
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};

export const loginCurrentUser = () => async dispatch => {
  dispatch(setIsLoading());
  try {
    await dispatch(loadUser());
    dispatch(authenticationSuccess());
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
