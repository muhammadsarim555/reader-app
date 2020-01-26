import * as actionTypes from './actionTypes';

import {store} from '../index';

const onGetInfo = info => {
  console.log(info, 'info');
  return dispatch => {
    fetch('https://hellomoto123.herokuapp.com/addBooks/photos')
      .then(response => response.json())
      .then(json => {
        console.log(json, 'data is here');

        dispatch({
          type: actionTypes.BOOKSINFO,
          payload: info,
          type: 'FETCH_PRODUCTS_SUCCESS',
          boolean: false,
        });
      });
  };
};

store.dispatch(onGetInfo());

// const fetchProductsPending = () {
//   return {
//       type: FETCH_PRODUCTS_PENDING
//   }
// }

const fetchProductsSuccess = products => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products: products,
  };
};

export {onGetInfo, fetchProductsSuccess};
