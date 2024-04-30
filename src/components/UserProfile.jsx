import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/Mycontext";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { auth, handleUpdateAddress, address, setAddress, addressLoader } =
    useContext(UserContext);
  useEffect(() => {
    if (auth?.user?.address) {
      setAddress({
        name: auth?.user?.address?.name,
        street: auth?.user?.address?.street,
        city: auth?.user?.address?.city,
        state: auth?.user?.address?.state,
        zip: auth?.user?.address?.zip,
        country: auth?.user?.address?.country,
        phone: auth?.user?.address?.phone,
        address1: auth?.user?.address?.address1,
        address2: auth?.user?.address?.address1,
        district: auth?.user?.address?.district,
        email: auth?.user?.address?.email,
      });
    }
  }, [auth]);
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("currect path", address);
    try {
      await handleUpdateAddress(address);
      toast("address is updated", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    } catch (e) {
      toast("Something went wrong", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div className="row">
      <div className="col-xl-4">
        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">
            <img
              className="img-account-profile rounded-circle mb-2"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <div className="small font-italic text-muted mb-4">
              <h6>{auth?.user?.name}</h6>
              <p>{auth?.user?.email}</p>
            </div>
            {/* <button className="btn btn-primary" type="button">
              Upload new image
            </button> */}
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        <div className="card mb-4">
          <div className="card-header">Delivery Address</div>
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputUsername">
                  Full Name
                </label>
                <input
                  className="form-control"
                  id="inputUsername"
                  type="text"
                  placeholder="Enter your username"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputFirstName">
                    Landmark
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your Landmark"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputLastName">
                    Address1
                  </label>
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter your Address1"
                    name="address1"
                    value={address.address1}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputOrgName">
                    Address2
                  </label>
                  <input
                    className="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="Enter your Address2"
                    name="address2"
                    value={address.address2}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputLocation">
                    State
                  </label>
                  <input
                    className="form-control"
                    id="inputLocation"
                    type="text"
                    placeholder="Enter your State"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">
                  District
                </label>
                <input
                  className="form-control"
                  id="inputEmailAddress"
                  type="text"
                  placeholder="Enter your District"
                  name="district"
                  value={address.district}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputPhone">
                    City
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="text"
                    placeholder="Enter your City"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputBirthday">
                    Zip
                  </label>
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="number"
                    placeholder="Enter your Zip"
                    name="zip"
                    value={address.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputPhone">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={address.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputBirthday">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="tel"
                    name="phone"
                    value={address.phone}
                    onChange={handleChange}
                    placeholder="Enter your Phone"
                    required
                  />
                </div>
              </div>

              <button
                disabled={addressLoader}
                className="btn btn-primary"
                type="submit"
              >
                {addressLoader ? "Loading..." : "  Save changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
