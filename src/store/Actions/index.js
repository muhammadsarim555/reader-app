import * as actionTypes from './actionTypes';

const onGetInfo = info => {
  console.log(info, 'info');
  return dispatch => {
    fetch('https://hellomoto123.herokuapp.com/addBooks/photos')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: actionTypes.BOOKSINFO,
          payload: json,
          fetchLoading: false,
        });
      });
  };
};

export {onGetInfo};
