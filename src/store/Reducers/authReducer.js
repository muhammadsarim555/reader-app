import {BOOKSINFO} from '../Actions/actionTypes';

const INITIAL_STATE = {
  bookData: [],
  fetchLoading: true,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKSINFO:
      return {
        ...INITIAL_STATE,
        bookData: action.payload,
      };

      // case "FETCH_PRODUCTS_SUCCESS":
      //   return {
      //       ...state,
      //       fetchLoading: false,
      //       fetchLoading: action.
      //   }

    default:
      return state;
  }
};

export default AuthReducer;
