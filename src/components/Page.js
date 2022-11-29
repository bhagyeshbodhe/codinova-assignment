import React from "react";
import CheckOut from "./checkoutPage.js/CheckOut";
import ProductList from "./productList/ProductList";
const Page = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <CheckOut />
        <ProductList />
      </div>
    </>
  );
};

export default Page;
