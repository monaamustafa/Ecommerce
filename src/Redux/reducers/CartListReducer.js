export default function  CartListReducer(state=[],action){
    if(action.type==="GET-CART-ITEMS"){
        return action.payload;
    }
    return state;

}