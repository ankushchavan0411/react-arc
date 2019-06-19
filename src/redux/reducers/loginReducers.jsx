import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        error: null
      };
    default:
      return state;
  }
};

export default loginReducer;
