import React, { useEffect } from "react";
import getProductAction from "../../Redux/action/getProductAction";
import { connect } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails(props) {
  let { id } = useParams();
  console.log(id);
  let [productState, setProductState] = useState([]);
  let { products, getProducts } = props;
  useEffect(() => {
    getProducts();
    let hh = products.find((item) => item.id == id);
    console.log(hh);
    setProductState(hh);
    console.log(productState);
  });
  return (
    <div className="container">
      <h3 className="bg-info p-3">products List</h3>
      <div className="d-flex  flex-con ">
        {productState && (
          <div className=" productCard" key={productState.id}>
            <img src={productState.image} alt="sdkjnjhs" />
            <h6>
              {productState.id}:{productState.name}
            </h6>
            <p>{productState.price}</p>
            <hr />
          </div>
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
