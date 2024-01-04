import React from "react";
import { PiNotebookFill } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
import doctor from "../Images/contactDoctor2.jpg";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.table(contact);
    const apiUrl =
      "https://sheet.best/api/sheets/6827987d-0edf-42c0-bbd7-1870c59712c3";
    console.log("alert", contact);
    const contactDetaiils = {
      Name: contact.name,
      Email: contact.email,
      Phone: contact.phone,
    };
    setLoading(true);
    axios
      .post(apiUrl, contactDetaiils)
      .then(function (response) {
        // Handle successful response
        // console.log("Response:", response);
        setLoading(false);
        setContact({
          name: "",
          email: "",
          phone: "",

          gender: "",

          appointmentDate: "",
        });
        // alert("data is submitted");
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
        setLoading(false);
      });
  };
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row colSetContact px-4">
              <div className="row contactHeading ">
                <div className="d-flex flex-row">
                  <span className="contactIcon">
                    <PiNotebookFill />
                  </span>
                  <span className="headingContact mt-1">
                    Make An Appointment
                  </span>
                </div>
              </div>
              <div className="row  px-4 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group ">
                      <label htmlFor="inputEmail4">Name</label>
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
                    <div className="form-group ">
                      <label htmlFor="inputPassword4">Email</label>
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
                    <div className="form-group ">
                      <label htmlFor="inputEmail4">Phone</label>
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
                  </div>

                  <div className="row m-auto py-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-50 atSmall991FullContact"
                      default={loading}
                    >
                      {loading ? "Loading..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="imagContainerContact m-0 p-0">
                <img src={doctor} alt="doctor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
