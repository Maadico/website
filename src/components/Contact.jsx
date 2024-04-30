import React from "react";
// import { PiNotebookFill } from "react-icons/pi";
import { useState, useContext } from "react";
import axios from "axios";
// import doctor from "../Images/contactDoctor2.jpg";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { AppointMentContext } from "../context/Mycontext";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import toast from "react-hot-toast";

import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

dayjs.extend(customParseFormat);
const Contact = () => {
  const { handleAppointment, loader } = useContext(AppointMentContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentTime: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !contact.name ||
      !contact.phone ||
      !contact.appointmentTime ||
      !contact.time
    ) {
      toast("all fields necessary", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      return;
    }

    try {
      const data = await handleAppointment(contact);
      toast(data, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      setContact({
        name: "",
        email: "",
        phone: "",
        appointmentTime: "",
        time: "",
      });
    } catch (e) {
      console.log(e.message);
      console.log(e);
    }
  };
  const handleDate = (e) => {
    if (e) {
      setContact((p) => ({ ...p, appointmentTime: e }));
      console.log(e.$d);
    }
  };
  const onChange = (t) => {
    // console.log(timeString);
    setContact((p) => ({ ...p, time: t }));
  };
  return (
    <>
      <div className="contacts" id="contacts">
        <div className="container">
          <div className="row p-2  ">
            <div className="col-md-4">
              <div className="row mt-4">
                <div className="leftContactList ">
                  <div className="l text-center">
                    <span>
                      <IoMdCall color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Phone Number</h6>
                    <p> 9833429932</p>
                  </div>
                </div>
                <div className="leftContactList">
                  <div className="l text-center">
                    <span>
                      <MdEmail color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Email Address</h6>
                    <p>maadicohealthcare@gmail.com</p>
                  </div>
                </div>
                <div className="leftContactList">
                  <div className="l text-center">
                    <span>
                      <ImLocation color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Location</h6>
                    <p>Gujurat - 395009</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7  mx-2 my-1 removeMarginAt767 ">
              <div className="row m-0 my-4 py-2 px-2 g-0">
                <div className="rightContactList">
                  <div className="row ">
                    <h4>
                      <b> Make An Appointment</b>{" "}
                    </h4>
                  </div>
                  <div className="row sizeDecCon"></div>
                  <form onSubmit={handleSubmit}>
                    <div className="row py-2">
                      <div className="col-md-6 mb-2">
                        <input
                          type="text"
                          value={contact.name}
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Name"
                          onChange={(e) => {
                            setContact((prevContact) => ({
                              ...prevContact,
                              name: e.target.value,
                            }));
                          }}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <input
                          type="email"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Email"
                          value={contact.email}
                          onChange={(e) => {
                            setContact((prevContact) => ({
                              ...prevContact,
                              email: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 my-2">
                        <input
                          type="number"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="phone"
                          value={contact.phone}
                          onChange={(e) => {
                            setContact((prevContact) => ({
                              ...prevContact,
                              phone: e.target.value,
                            }));
                          }}
                          required
                        />
                      </div>

                      <div className="col-md-6 my-2">
                        <DatePicker
                          defaultValue={dayjs("2024-04-19", dateFormat)}
                          minDate={dayjs("2024-04-18", dateFormat)}
                          maxDate={dayjs("2024-12-31", dateFormat)}
                          onChange={handleDate}
                          value={contact.appointmentTime}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 my-2">
                        <TimePicker
                          onChange={onChange}
                          // defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                          value={contact?.time}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          className="btn"
                          style={{
                            backgroundColor: " rgb(24, 50, 91)",
                            color: "white",
                          }}
                          default={loader}
                          type="submit"
                        >
                          {loader ? "Loading..." : "Book Appointment"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row locationContact mt-2 text-center d-flex justify-content-center">
            <div className="row text-center ">
              <h3>Find Us on Google Maps</h3>
              <p>
                Chatrapati Shivaji Marg, Adajan Gam, Adajan, Surat, Gujarat
                395009
              </p>
            </div>
            <div className="row my-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.693557604641!2d72.79415279181822!3d21.19824485150673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c32918cc96b%3A0xb818680ac8b4bbae!2sChatrapati%20Shivaji%20Marg%2C%20Adajan%20Gam%2C%20Adajan%2C%20Surat%2C%20Gujarat%20395009!5e0!3m2!1sen!2sin!4v1714470470357!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
