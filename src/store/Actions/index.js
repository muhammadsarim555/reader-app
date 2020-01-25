import firebase from "react-native-firebase";
import * as actionTypes from "./actionTypes";

const getOtpCode = code => {
  return dispatch => {
    dispatch({
      type: actionTypes.OTPCODE,
      payload: code
    });
  };
};

const onGoogleLoginSuccess = user => {
  return dispatch => {
    dispatch({
      type: actionTypes.ONGOOGLESUCCESS,
      payload: user
    });
  };
};

const onLogOut = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export { onGoogleLoginSuccess, getOtpCode,onLogOut };