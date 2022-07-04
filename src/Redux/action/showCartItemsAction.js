import cart from '../../data/cart.json'
export default function showCartItemsAction(){
    let data=cart    
    return{
        type: "GET-CART-ITEMS",
        payload:data
    }
}