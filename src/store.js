import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
const initialState = {};
const middleWare = [thunk];
const Store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default Store;
