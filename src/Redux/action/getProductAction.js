import axios from "axios";
import Products from '../../data/Products.json'
export default function getProductAction(){
    let data=Products
    
    // let data=axios.get(Products).then((response)=>{
    //     console.log(data)
    //     return response.data;
    // }).catch((E)=>{
    //     console.log("KDBJJD")
    // })
    return{
        type: "PRODUCT-LIST",
        payload:data
    }
}