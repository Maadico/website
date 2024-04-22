import React, { useState } from "react";
import { AppointMentContext } from "./Mycontext";
import axios from "axios";
const AppointMent = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const handleAppointment = async (contact) => {
    try {
      setLoader(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/appointment`,
        contact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        console.log(data);
        setLoader(false);
        return data.message;
      }
    } catch (e) {
      console.log(e);
      setLoader(false);

      return e.message;
    }
  };
  return (
    <AppointMentContext.Provider value={{ handleAppointment, loader }}>
      {children}
    </AppointMentContext.Provider>
  );
};

export default AppointMent;
