import React from "react";
import { useState } from "react";
import { Radio, Select, Calendar, DatePicker } from "antd";
import axios from "axios";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    isApplied: "",
    department: "",
    procedure: "",
    appointmentDate: "",
    // appointmentTime: "",
  });
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
      Address: contact.address,
      City: contact.city,
      State: contact.state,
      PinCode: contact.pinCode,
      Country: contact.country,
      IsApplied: contact.isApplied,
      Department: contact.department,
      Procedure: contact.procedure,
      AppointmentDate: contact.appointmentDate,
      Phone: contact.phone,
      Dob: contact.dob,
    };
    axios
      .post(apiUrl, contactDetaiils)
      .then(function (response) {
        // Handle successful response
        console.log("Response:", response);
        alert("data is submitted");
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
      });
  };
  return (
    <div className="contact">
      <div className="container ">
        <div className="row contactHeading text-center pt-2">
          <h3>Doctor Appointment Request Form</h3>
        </div>
        <div className="row contactSubHeading text-center">
          <p>
            Fill the form below and we will get back soon to you for more
            updates and plan your appointment.
          </p>
        </div>
        <hr />
        {/* form */}

        <div className="row">
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
                  placeholder="Name"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      phone: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">DOB</label>
                <div className="row mx-1">
                  <DatePicker
                    onChange={(date, dateString) => {
                      setContact((prevContact) => ({
                        ...prevContact,
                        dob: date,
                      }));
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={(e) => {
                  setContact((prevContact) => ({
                    ...prevContact,
                    address: e.target.value,
                  }));
                }}
                required
              />
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      city: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputCity">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      state: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  onChange={(e) => {
                    setContact((prevContact) => ({
                      ...prevContact,
                      pinCode: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
            </div>

            <div className="row">
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
              <div className="col-md-6">
                <div className="row">
                  <legend className="col-form-label col-sm-5 pt-0">
                    Have you Applied before ?
                  </legend>
                  <Radio.Group
                    onChange={(e) => {
                      setContact((prevContact) => ({
                        ...prevContact,
                        isApplied: e.target.value,
                      }));
                    }}
                    value={contact.isApplied}
                    required
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row mt-1">
                  <legend className="col-form-label  pt-0">
                    Which Department would you like top get an appointment from
                    ?
                  </legend>

                  <div className="row mt-2 py-2 ">
                    <Select
                      defaultValue="Cardio"
                      style={{
                        width: "40%",
                      }}
                      onChange={(value) => {
                        setContact((prevContact) => ({
                          ...prevContact,
                          department: value,
                        }));
                      }}
                      options={[
                        {
                          value: "ortho",
                          label: "Ortho",
                        },
                        {
                          value: "nero",
                          label: "Neuro",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row my-1">
                  <legend className="col-form-label  pt-0">
                    Which procedure do you want to make an appointment for?
                  </legend>

                  <div className="row  ">
                    <Select
                      defaultValue="Medical Eximination"
                      style={{
                        width: "40%",
                      }}
                      onChange={(value) => {
                        setContact((prevContact) => ({
                          ...prevContact,
                          procedure: value,
                        }));
                      }}
                      options={[
                        {
                          value: "Doctor Check",
                          label: "Doctor Check",
                        },
                        {
                          value: "Result Analysis",
                          label: "Result Analysis",
                        },
                      ]}
                    />
                  </div>
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
              <button type="submit" className="btn btn-primary w-25">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
