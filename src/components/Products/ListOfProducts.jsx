import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LocationPanner from "../LocationPanner";
function ListOfProducts(props) {
  let [productState, setProductState] = useState();
  let { products, getProducts } = props;
  useEffect(() => {
    getProducts();
    setProductState(products);
    console.log(productState);
  });
  return (
    <>
      <LocationPanner loc="Products" path="/product" />
      <div className="container">
        <h3 className=" p-3">products List</h3>
        <div className="d-flex  flex-con ">
          {products &&
            products.map((product, index) => {
              return (
                <div className="productCard" key={product.id}>
                  <div className="productCard-img">
                    <img src={product.image} alt="sdkjnjhs" />
                  </div>
                  <div className="productCard-content">
                    <h6>{product.name}</h6>
                    <p>{product.price}</p>
                    <hr />
                    <NavLink to={`/product/${product.id}`}>Show</NavLink>
                  </div>
                </div>
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
