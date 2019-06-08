import * as types from './actionTypes';
import api from '../../../api';

export function getData(amount,numMonths) {
  // body...
  return async (dispatch, getState) => {
    dispatch({
      type: types.LOADING,
    });
    try {
      const payments = await api.getUsers(amount,numMonths);
      console.log(payments)
      dispatch({
        type: types.LOADED,
        payments,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
