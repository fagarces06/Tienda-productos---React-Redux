import { createStore } from "redux";
import rootRedcuers from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
const store=createStore(rootRedcuers,composeWithDevTools());

export default store;