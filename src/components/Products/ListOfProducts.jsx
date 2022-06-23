import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import { useState } from "react";

function ListOfProducts(props) {
  let [productState,setProductState]=useState();
  let { products, getProducts } = props;
  useEffect(() => {
    getProducts();
    setProductState(products);
    console.log(productState);
  });
  return (
    <div className="container" >
      <h3 className="bg-info p-3">products List</h3>
      <div className="d-flex  flex-con ">
        {products &&
          products.map((product, index) => {
            return (
              <div className="bg-light productCard" key={product.id}>
                <img src={product.image} alt="sdkjnjhs"/>
                <h6>
                  {product.id}:{product.name}
                </h6>
                <p>{product.price}</p>
                <hr />
                <a href={`product/${product.id}`}>Show</a>
              </div>
            );
          })}
      </div>
    </div>
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
