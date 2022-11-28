import React, { useState } from "react";
import { useSelector } from "react-redux";
import Receipt from "./Receipt";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux-slices/cartSlice";
import "./bill.css";

const Bill = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [vat, setVat] = useState("");
  const [discount, setDiscount] = useState("");
  const [receipt, setReceipt] = useState(false);

  const handleReceipt = () => {
    setReceipt(!receipt);
  };

  let subTotal = cartItems.reduce(
    (pre, item) => pre + item.price * item.itemQuantity,
    0
  );

  let numberOfItems = cartItems.reduce(
    (pre, item) => pre + item.itemQuantity,
    0
  );

  let total = subTotal;
  if (vat && discount) total = subTotal + subTotal / vat - subTotal / discount;
  else if (vat) total = subTotal + subTotal / vat;
  else if (discount) total = subTotal - subTotal / discount;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <tr>
        <td>SubTotal</td>
        <td>{subTotal}</td>
        <td>{numberOfItems}</td>
      </tr>
      <tr>
        <td>VAT tax</td>
        <td>
          <input
            type="text"
            value={vat}
            onChange={(e) => setVat(e.target.value)}
          />
        </td>
        <td>{vat ? subTotal / vat : ""}</td>
      </tr>
      <tr>
        <td>Discount</td>
        <td>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </td>
        <td>{discount ? subTotal / discount : ""}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td style={{ color: "green" }}>{total}</td>
      </tr>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          onClick={handleClearCart}
          className="button"
          style={{ backgroundColor: "red" }}
        >
          Cancel Sale
        </button>
        <button
          onClick={handleReceipt}
          className="button"
          style={{ backgroundColor: "green" }}
        >
          Process Sale
        </button>
      </div>
      {receipt && (
        <Receipt
          handleReceipt={handleReceipt}
          vat={vat}
          discount={discount}
          total={total}
        />
      )}
    </>
  );
};

export default Bill;
