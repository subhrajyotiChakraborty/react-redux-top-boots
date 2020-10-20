import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  items: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
