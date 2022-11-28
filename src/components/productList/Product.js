import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-slices/cartSlice";
import "./product.css";

const Product = (prod) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };

  return (
    <>
      <div
        onClick={() => handleAddToCart(prod)}
        className="product"
        style={{
          backgroundColor: prod.color,
        }}
      >
        <h3>{prod.name}</h3>
      </div>
    </>
  );
};

export default Product;
