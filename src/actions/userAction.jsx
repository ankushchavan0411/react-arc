import * as actionTypes from "../lib/constants/actionTypes";

const loginSucceeded = data => ({
  type: actionTypes.LOGIN,
  payload: data
});

export const login = (adminLoginParamers) => {
  return dispatch => {
    return dispatch(loginSucceeded({status: true}));
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
    payload: ""
  };
};


