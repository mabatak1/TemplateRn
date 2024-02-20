import actionTypes from '../ActionTypes';

export interface IUserReducer {
  data?: {};
  type: string;
}

const initialState: IUserReducer = {
  data: {},
  type: '',
};

export default (state = initialState, action: any) => {
  state.type = action.type;
  switch (action.type) {
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        errorMessage: action.error,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.response,
        errorMessage: '',
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        data: {},
        errorMessage: '',
      };
    default:
      return state;
  }
};
