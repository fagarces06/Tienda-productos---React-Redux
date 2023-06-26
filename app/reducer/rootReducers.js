import { combineReducers } from "redux";
//import game_shop from "./gameShopReducers";
import user_reducer from "./setUserReducer";
import cart_reducer from "./cartReducer";
const rootRedcuers=combineReducers({
    user_reducer,
    cart_reducer,
   // game_shop,
   // console_reducer
});

export default rootRedcuers;