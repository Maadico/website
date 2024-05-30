import { orderContext } from "./Mycontext";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const OrederProvoider = ({ children }) => {
  const [oLoader, setOloader] = useState(true);
  const [order, setOrder] = useState([]);
  const [allOrder, setAllOrder] = useState([]);

  const handleOrder = async (productData, auth) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/orderonline`,
        productData,
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

          const redirectUrl =
            data?.data?.data?.instrumentResponse?.redirectInfo?.url;
          // if (window.open) {
          //   window.open(redirectUrl, "_blank");
          // }

          const a = document.createElement("a");
          a.href = redirectUrl;
          a.target = "_blank"; // Open in new tab
          a.rel = "noopener noreferrer"; // Security reasons

          // Append the anchor to the body
          document.body.appendChild(a);

          // Programmatically trigger a click event on the anchor
          a.click();

          // Remove the anchor from the document
          document.body.removeChild(a);

          return;
        }
      }
    } catch (e) {
      toast(e.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      console.log(e);
    }
  };
  const handleGetOrders = async (auth) => {
    setOloader(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/orders`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        setOrder(data?.orders);
        setOloader(false);
      }
    } catch (e) {
      console.log(e);
      setOloader(false);
    }
  };

  const handleGetAllOrders = async (auth) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/allorders`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        console.log(data);
        setAllOrder(data?.orders);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateStatus = async (auth, id, updateData) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/orders/${id}`,
        updateData,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        console.log(data);
        // setAllOrder(data?.orders);
        const ordersData = [...allOrder];
        const datas = ordersData?.map((o) => {
          if (o?._id === data?.orders?._id) {
            return {
              ...o,
              status: data?.orders?.status,
              placedDate: data?.orders?.placedDate,
            };
          }
          return o;
        });
        console.log(datas);
        setAllOrder(datas);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <orderContext.Provider
      value={{
        handleOrder,
        handleGetOrders,
        handleGetAllOrders,
        oLoader,
        order,
        allOrder,
        handleUpdateStatus,
      }}
    >
      {children}
    </orderContext.Provider>
  );
};

export default OrederProvoider;
