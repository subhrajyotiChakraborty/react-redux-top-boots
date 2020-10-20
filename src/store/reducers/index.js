import { combineReducers } from "redux";

import itemReducer from "./items";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
});

export default rootReducer;
