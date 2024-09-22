import { productContext } from "./Mycontext";

import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [pLoader, setPloader] = useState(true);
  const [cartLoad, setCartLoad] = useState(false);

  const handlePostProduct = async (p, auth) => {
    try {
      console.log(p, auth);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/product`,
        p,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        setProduct([...products, data?.product]);
        console.log(data?.product);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (id, auth) => {
    console.log("delete");
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/product/${id}`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        const deleteProduct = products.filter((p) => {
          return p?._id !== id;
        });
        setProduct(deleteProduct);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const productGet = async (auth) => {
    try {
      setPloader(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/product`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        setProduct(data?.product);
        console.log(data?.product);
        setPloader(false);
      }
    } catch (e) {
      setPloader(false);

      console.log(e);
    }
  };

  const handleDetailsProduct = async (auth, id) => {
    try {
      console.log(id);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/productdetails/${id}`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        console.log(data?.product);

        return data?.product;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleAdToCart = async (id, auth) => {
    console.log(id, auth?.token);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/cart/${id}`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        const carts = data?.cart?.product;
        setCart([
          ...cart,
          {
            ...carts,
            cId: data?.cart?._id,
          },
        ]);

        return data?.message;
      } else {
        return data?.message;
      }
    } catch (e) {
      return e.response.data.message;
    }
  };
  const handleDeleteCart = async (auth, id) => {
    try {
      //   console.log(id);
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/cart/${id}`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        setCart((prevItems) => prevItems.filter((item) => item.cId !== id));
        // console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const cartGet = async (auth) => {
    try {
      let storedUuid = localStorage.getItem("app_uuid");

      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/multiple-cart/${storedUuid}`,

        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        const cartData = data?.cart?.map((c) => {
          const cartDatas = c?.product;
          const cId = c?._id;

          return {
            ...cartDatas,
            cId,
          };
        });
        // console.log(cartData);

        setCart(cartData);
        setCartLoad(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFeedback = async (auth, newComment) => {
    try {
      console.log(newComment);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/feedback`,
        newComment,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        console.log(data);
        return data?.product;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFeedbackProgramm = async (auth, newComment) => {
    try {
      console.log(newComment);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/program-review`,
        newComment,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        console.log(data);
        return data?.product;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdToGuestCart = async (pid, gId) => {
    // console.log(id, auth?.token);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/cart-guest-add/${pid}/${gId}`
      );

      if (data?.success) {
        const carts = data?.cart?.product;
        setCart([
          ...cart,
          {
            ...carts,
            cId: data?.cart?._id,
          },
        ]);

        return data?.message;
      } else {
        return data?.message;
      }
    } catch (e) {
      return e.response.data.message;
    }
  };

  const guestCartGet = async (gId) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/cart-guest/${gId}`
      );

      if (data?.success) {
        const cartData = data?.cart?.map((c) => {
          const cartDatas = c?.product;
          const cId = c?._id;

          return {
            ...cartDatas,
            cId,
          };
        });
        // console.log(cartData);

        setCart(cartData);
        setCartLoad(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteGuestCart = async (id) => {
    console.log("hello worlds", id);
    try {
      //   console.log(id);
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/cart-guest-delete/${id}`
      );

      if (data?.success) {
        setCart((prevItems) => prevItems.filter((item) => item.cId !== id));
        // console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <productContext.Provider
      value={{
        handlePostProduct,
        products,
        handleDelete,
        productGet,
        handleDetailsProduct,
        handleAdToCart,
        cart,
        setCart,
        handleDeleteCart,
        cartGet,
        handleFeedback,
        pLoader,
        cartLoad,
        handleFeedbackProgramm,
        handleAdToGuestCart,
        guestCartGet,
        handleDeleteGuestCart,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
