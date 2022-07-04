import { combineReducers } from "redux";
import CartListReducer from "./CartListReducer";
import CounterReducer from "./CounterReducer";
import ProductReducer from "./ProductReducer";
export default combineReducers({
    counter:CounterReducer,
    productList:ProductReducer,
    cartList:CartListReducer,
})