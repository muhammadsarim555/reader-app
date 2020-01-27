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
        fetchLoading: action.fetchLoading,
      };

    default:
      return state;
  }
};

export default AuthReducer;
