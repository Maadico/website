import React, { useState } from "react";
import { OrderContext } from "./Mycontext";
import axios from "axios";
import toast from "react-hot-toast";

const Order = ({ children }) => {
  const [order, setOrder] = useState([]);
  const handleOrderProgramPlane = async (orderDetails, auth) => {
    console.log(orderDetails);
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
        // console.log(data);

        if (data && data?.data?.data?.instrumentResponse?.redirectInfo?.url) {
          console.log(data?.data?.data?.instrumentResponse?.redirectInfo?.url);

          const redirectUrl =
            data?.data?.data?.instrumentResponse?.redirectInfo?.url;

          // if (window.open) {
          //   window.open(redirectUrl, "_blank");
          // }
          setTimeout(() => {
            window.open(redirectUrl, "_blank");
          });
        }
      }
    } catch (e) {
      console.log(e);
      toast(e.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      return e.response.data.message;
    }
  };

  const handleGetOrderProgramPlane = async (auth) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/program-orders`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token,
          },
        }
      );
      if (data?.success) {
        console.log(data);
        setOrder(data?.programs);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <OrderContext.Provider
      value={{ handleOrderProgramPlane, handleGetOrderProgramPlane, order }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default Order;
