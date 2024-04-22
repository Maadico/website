import React, { useState } from "react";
import { OrderContext } from "./Mycontext";
import axios from "axios";
const Order = ({ children }) => {
  const handleOrderProgramPlane = async (orderDetails, auth) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/program-orders`,
        orderDetails,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token,
          },
        }
      );
      if (data?.success) {
        console.log(data);

        if (data && data?.data?.data?.instrumentResponse?.redirectInfo?.url) {
          console.log(data?.data?.data?.instrumentResponse?.redirectInfo?.url);
          window.location.href =
            data?.data?.data?.instrumentResponse?.redirectInfo?.url;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <OrderContext.Provider value={{ handleOrderProgramPlane }}>
      {children}
    </OrderContext.Provider>
  );
};

export default Order;
