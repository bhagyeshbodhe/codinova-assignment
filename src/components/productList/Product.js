import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-slices/cartSlice";
import "./product.css";

const Product = (prod) => {
  const dispatch = useDispatch();
  const [desp, setDesp] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };

  const handleMouseEnter = () => {
    setDesp(true);
  };

  const handleMouseLeave = () => {
    setDesp(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleAddToCart(prod)}
        className="product"
        style={{
          backgroundColor: prod.color,
        }}
      >
        <h3>{prod.name}</h3>
        {desp && <p>{prod.description}</p>}
      </div>
    </>
  );
};

export default Product;
