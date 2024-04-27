import React, { useState, useEffect } from "react";
import { AppointMentContext, UserContext } from "./Mycontext";
import axios from "axios";
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))
      ? JSON.parse(localStorage.getItem("auth"))
      : {
          user: null,
          token: "",
        }
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [Lprofile, setLprofile] = useState(true);
  const [isAuthenticate, setIsAuthenticated] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    address1: "",
    address2: "",
    email: "",
    district: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [addressLoader, setAddressLoadser] = useState(false);
  useEffect(() => {
    setLprofile(true);
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
      setLprofile(false);
      setIsAuthenticated(true);
    } else {
      setLprofile(false);
    }
    // eslint-disable-next-line
  }, []);

  const handleUpdateAddress = async (location) => {
    try {
      setAddressLoadser(true);
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/update`,
        {
          address: location,
        },
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      if (data?.success) {
        setAuth({
          ...auth,
          user: data?.user,
        });
        setAddressLoadser(false);
      }

      localStorage.setItem(
        "auth",
        JSON.stringify({ ...auth, user: data?.user })
      );
    } catch (e) {
      setAddressLoadser(false);

      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        setAuth,
        auth,
        isAuthenticate,
        setIsAuthenticated,
        Lprofile,
        handleUpdateAddress,
        address,
        setAddress,
        addressLoader,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
