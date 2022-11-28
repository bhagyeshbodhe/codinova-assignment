import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux-slices/cartSlice";
import "./table.css";
const Table = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
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
              <td>{item.itemQuantity}</td>
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
