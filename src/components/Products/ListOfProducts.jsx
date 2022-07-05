import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import { useState } from "react";
import { Link} from "react-router-dom";
import LocationPanner from "../LocationPanner";
import {useCart} from 'react-use-cart'
import "./style/product.css";

function ListOfProducts(props) {
  let [productState, setProductState] = useState();
  let { products, getProducts } = props;
  const{addItem}=useCart();
  useEffect(() => {
    getProducts();
    setProductState(products);
    console.log(productState);
  });
  return (
    <>
      <LocationPanner />
      <div className="container">
        <h3 className=" p-3">products List</h3>
        <div className="d-flex  flex-con ">
          {products &&
            products.map((product, index) => {
              return (
                <Link to={`/product/${product.id}`} className="productCard" key={product.id}>
                  <div className="productCard-img">
                    <img src={product.image} alt="sdkjnjhs" />
                  </div>
                  <div className="productCard-content">
                    <h6>{product.name}</h6>
                    <p>{product.price}</p>
                    <hr />
                    <Link to={`/product/${product.id}`}>Show</Link>
                    <button className="add-to-cart-btn" onClick={()=>addItem(product)}>
                      Add Item
                    </button>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
let mapStateToProps = (state) => {
  return {
    products: state.productList,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfProducts);
