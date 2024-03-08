import actionTypes from '../ActionTypes';

/*
 * Reducer actions related with login
 */

export const loginRequest = (body: object) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    body,
  };
};

export const loginFailed = (error: any) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error,
  };
};

export const loginSuccess = (response: object, body?: object) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    response,
    body,
  };
};

// logout
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
