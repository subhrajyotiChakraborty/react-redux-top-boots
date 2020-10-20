import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  cartCount: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };

    default:
      return state;
  }
};

export default reducer;
