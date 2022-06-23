import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import ProductReducer from "./ProductReducer";
export default combineReducers({
    counter:CounterReducer,
    productList:ProductReducer,
})