import axios from "../../axios/axios";
import * as actionTypes from "./actionTypes";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchItemsStart());
      const response = await axios.get("");
      dispatch(fetchItemsSuccess(response.data.items));
    } catch (error) {
      console.log(error);
      dispatch(fetchItemsFail());
    }
  };
};

export const fetchItemsStart = () => {
  return {
    type: actionTypes.FETCH_ITEMS_START,
  };
};

export const fetchItemsSuccess = (itemsData) => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    payload: itemsData,
  };
};

export const fetchItemsFail = () => {
  return {
    type: actionTypes.FETCH_ITEMS_FAIL,
  };
};
