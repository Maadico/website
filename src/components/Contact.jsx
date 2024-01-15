import React from "react";
// import { PiNotebookFill } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
// import doctor from "../Images/contactDoctor2.jpg";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      message: contact.message,
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
    // <div className="contacts" id="contacts">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="row colSetContact px-4">
    //           <div className="row contactHeading ">
    //             <div className="d-flex flex-row">
    //               <span className="contactIcon">
    //                 <PiNotebookFill />
    //               </span>
    //               <span className="headingContact mt-1">
    //                 Make An Appointment
    //               </span>
    //             </div>
    //           </div>
    //           <div className="row  px-4 ">
    //             <form onSubmit={handleSubmit}>
    //               <div className="row">
    //                 <div className="form-group ">
    //                   <label htmlFor="inputEmail4">Name</label>
    //                   <input
    //                     type="text"
    //                     value={contact.name}
    //                     className="form-control"
    //                     id="inputEmail4"
    //                     placeholder="Name"
    //                     onChange={(e) => {
    //                       setContact((prevContact) => ({
    //                         ...prevContact,
    //                         name: e.target.value,
    //                       }));
    //                     }}
    //                     required
    //                   />
    //                 </div>
    //                 <div className="form-group ">
    //                   <label htmlFor="inputPassword4">Email</label>
    //                   <input
    //                     type="email"
    //                     className="form-control"
    //                     id="inputPassword4"
    //                     placeholder="Email"
    //                     value={contact.email}
    //                     onChange={(e) => {
    //                       setContact((prevContact) => ({
    //                         ...prevContact,
    //                         email: e.target.value,
    //                       }));
    //                     }}
    //                   />
    //                 </div>
    //               </div>

    //               <div className="row">
    //                 <div className="form-group ">
    //                   <label htmlFor="inputEmail4">Phone</label>
    //                   <input
    //                     type="number"
    //                     className="form-control"
    //                     id="inputEmail4"
    //                     placeholder="phone"
    //                     value={contact.phone}
    //                     onChange={(e) => {
    //                       setContact((prevContact) => ({
    //                         ...prevContact,
    //                         phone: e.target.value,
    //                       }));
    //                     }}
    //                     required
    //                   />
    //                 </div>
    //               </div>

    //               <div className="row m-auto py-4">
    //                 <button
    //                   type="submit"
    //                   className="btn btn-primary w-50 atSmall991FullContact"
    //                   default={loading}
    //                 >
    //                   {loading ? "Loading..." : "Book Appointment"}
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="row">
    //           <div className="imagContainerContact m-0 p-0">
    //             <img src={doctor} alt="doctor" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="contacts" id="contacts">
        <div className="container">
          <div className="row p-2  ">
            <div className="col-md-3">
              <div className="row mt-4">
                <div className="leftContactList ">
                  <div className="l text-center">
                    <span>
                      <IoMdCall color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Phone Number</h6>
                    <p>+9878655567</p>
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
                    <p>inf0@gmail.com</p>
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
            <div className="col-md-8  mx-2 my-2 removeMarginAt767 ">
              <div className="row m-0 my-4 py-2 px-2 g-0">
                <div className="rightContactList">
                  <div className="row ">
                    <h4>
                      <b> Make An Appointment</b>{" "}
                    </h4>
                  </div>
                  <div className="row sizeDecCon">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio nulla asperiores minima quo, sunt est voluptate
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
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
                    </div>
                    <div className="row">
                      <div className="col my-2">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="message"
                          onChange={(e) => {
                            setContact((prevContact) => ({
                              ...prevContact,
                              message: e.target.value,
                            }));
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary"
                          default={loading}
                          type="submit"
                        >
                          {loading ? "Loading..." : "Book Appointment"}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab
                labore ut nobis saepe cupiditate, perspiciatis voluptatum
              </p>
            </div>
            <div className="row my-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3719.8054487302466!2d72.78721437393946!3d21.199886181881496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMaaDico%20Healthcare%20E%20-%20103%20%2C%20Ramkutir%20Complex%20Surat%2C%20Gujurat%20-%20395009!5e0!3m2!1sen!2sin!4v1705352340716!5m2!1sen!2sin"
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
