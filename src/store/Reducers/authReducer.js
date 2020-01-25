import { ONGOOGLESUCCESS, OTPCODE,LOGOUT } from "../Actions/actionTypes";

const INITIAL_STATE = {
  user: null,
  otpcode: ""
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONGOOGLESUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload
      };
    case OTPCODE:
      return {
        ...INITIAL_STATE,
        otpcode: action.payload
      };
      case LOGOUT:
        return {
          ...state,
          user: null,
          
        };
    default:
      return state;
  }
};

export default AuthReducer;