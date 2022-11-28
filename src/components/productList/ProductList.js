import React from "react";
import Data from "./data.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 140 }}>
        {Array.isArray(Data) &&
          Data.map((prod, i) => <Product key={i} {...prod} />)}
      </div>
    </>
  );
};

export default ProductList;
