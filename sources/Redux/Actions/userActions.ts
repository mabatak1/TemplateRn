import actionTypes from '../ActionTypes';

/*
 * Reducer actions related with login
 */

export const loginRequest = (body: object, keepLogin: boolean) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    body,
    keepLogin,
  };
};

export const loginFailed = (error: any) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error,
  };
};

export const loginSuccess = (
  response: object,
  keepLogin?: boolean,
  body?: object,
) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    response,
    keepLogin,
    body,
  };
};

// logout
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
