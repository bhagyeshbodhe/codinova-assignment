import React from "react";
import Bill from "./Bill";
import Table from "./Table";
import "./checkOut.css";

const CheckOut = () => {
  return (
    <>
      <div className="main">
        <div className="table">
          <Table />
        </div>
        <div className="price">
          <Bill />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
