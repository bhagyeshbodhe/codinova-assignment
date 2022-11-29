import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux-slices/cartSlice";
import "./receipt.css";

const Receipt = ({
  handleReceipt,
  vat,
  discount,
  total,
  setDiscount,
  setVat,
}) => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    handleReceipt();
    dispatch(clearCart());
    setVat("");
    setDiscount("");
  };

  return (
    <>
      <div className="modal">
        <div onClick={handleReceipt} className="overlay"></div>
        <div className="modal-content">
          <h3>Sale Number {Math.floor(Math.random() * 100)}</h3>
          <h4>Date {Date()}</h4>
          <thead>
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(cartItems) &&
              cartItems.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.itemQuantity}</td>
                  <td>{item.price * item.itemQuantity} INR</td>
                </tr>
              ))}
          </tbody>
          <hr />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Total : {total}</span>
            <span>Discount : {discount}%</span>
            <span>VAT : {vat}%</span>
          </div>
          <button className="close-modal" onClick={handleClearCart}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};

export default Receipt;
