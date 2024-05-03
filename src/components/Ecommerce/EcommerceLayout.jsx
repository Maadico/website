import React from "react";
import ShopHeader from "../ShopHeader";
import Footer from "../Footer";

const EcommerceLayout = ({ children }) => {
  return (
    <div>
      <ShopHeader />
      {children}
      <Footer />
    </div>
  );
};

export default EcommerceLayout;
