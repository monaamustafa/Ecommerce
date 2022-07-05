import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import showCartItemsAction from "../../Redux/action/showCartItemsAction";

function CartList(props) {
  let [productState, setProductState] = useState();
  let { products, getProducts } = props;
  useEffect(() => {
    getProducts();
    setProductState(products);
    console.log(products);
    console.log(productState);
  });

  return (
    <>
      <div className="container">
        <div className="d-flex flex-con ">
          {products &&
            products.map((product, index) => {
              return (
                <div className="productCard" key={product.id}>
                  {/* <img src={product.image} alt="sdkjnjhs" /> */}
                  <h6>{product.id}</h6>
                  <hr />
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
    products: state.cartList,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(showCartItemsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
