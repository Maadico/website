import React from "react";
import { useState } from "react";
import { Radio, Calendar } from "antd";
import axios from "axios";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",

    gender: "",

    appointmentDate: "",
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
      Gender: contact.gender,

      AppointmentDate: contact.appointmentDate,
      Phone: contact.phone,
    };
    setLoading(true);
    axios
      .post(apiUrl, contactDetaiils)
      .then(function (response) {
        // Handle successful response
        // console.log("Response:", response);
        setLoading(false);
        // alert("data is submitted");
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
        setLoading(false);
      });
  };
  return (
    <div className="contact">
      <div className="container pt-5">
        <div className="row contactHeading text-center pt-2">
          <h3>Doctor Appointment Request Form</h3>
        </div>
        <div className="row contactSubHeading text-center">
          <p>
            Fill the form below and we will get back soon to you for more
            updates and plan your appointment.
          </p>
        </div>

        {/* form */}

        <div className="row glassEffect p-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
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
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Email"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="phone"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      phone: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <fieldset className="form-group">
                    <div className="row my-2">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Gender
                      </legend>
                      <Radio.Group
                        onChange={(e) => {
                          setContact((prevContact) => ({
                            ...prevContact,
                            gender: e.target.value,
                          }));
                        }}
                        value={contact.gender}
                        required
                      >
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                        <Radio value="other">Other</Radio>
                      </Radio.Group>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="row dateTime">
              <div className="col-md-6">
                <div className="row my-1">
                  <legend className="col-form-label  pt-0">
                    Preferred Appointment Date
                  </legend>
                  <div className="row">
                    <Calendar
                      fullscreen={false}
                      onPanelChange={(value, mode) => {
                        setContact((prevContact) => ({
                          ...prevContact,
                          appointmentDate: value.format("YYYY-MM-DD"),
                        }));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="row m-auto py-4">
              <button
                type="submit"
                className="btn btn-primary w-25"
                default={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
