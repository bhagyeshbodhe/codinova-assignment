import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  incQuantity,
  removeItem,
} from "../redux-slices/cartSlice";
import "./table.css";
const Table = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleInc = (item) => {
    dispatch(incQuantity(item));
  };

  const handleDec = (item) => {
    dispatch(decQuantity(item));
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(cartItems) &&
          cartItems.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <svg
                  onClick={() => handleDec(item)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
                {item.itemQuantity}
                <svg
                  onClick={() => handleInc(item)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </td>
              <td>{item.price * item.itemQuantity}</td>
              <td>
                <button onClick={() => handleRemoveItem(item)}> Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
