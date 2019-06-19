import * as actionTypes from '../lib/constants/actionTypes';

const dashboardSucceeded = data => ({
    type: actionTypes.DASHBOARD,
    payload: data
  });

export const dashboard = (token) => {
    return dispatch => {
      return  dispatch(dashboardSucceeded({}));
    };
  };