import React, { useState, useEffect, useContext } from "react";
import programInfos from "../program.json";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { UserContext, OrderContext } from "../context/Mycontext";
import toast from "react-hot-toast";

const ProgramView = () => {
  const { id } = useParams();
  const { auth, isAuthenticate } = useContext(UserContext);
  const { handleOrderProgramPlane } = useContext(OrderContext);
  const navigate = useNavigate();
  const programInfo = programInfos[id - 1];
  const [programPrice, setProgramPrice] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const handleFetchProgramm = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_KEY}/program/${programInfo?.id}`,

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.success) {
          console.log(data);
          setLoader(false);

          setProgramPrice(data?.program);
        }
      } catch (e) {
        setLoader(false);

        console.log(e);

        return e.message;
      }
    };
    handleFetchProgramm();
  }, [programInfo]);
  function calculateNewPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  const handleBuyProgram = async () => {
    try {
      const orderDetails = {
        ProgramId: programInfo?.id,
        totalAmount: programPrice?.price,
        address: auth?.user?.address,
        pageNo: id,
      };
      console.log(orderDetails);
      if (auth && auth?.token) {
        if (auth?.user?.address) {
          await handleOrderProgramPlane(orderDetails, auth);
        } else {
          console.log("first filled address");
          toast("first filled address", {
            style: {
              borderRadius: "10px",
              background: " rgb(24, 50, 91)",
              color: "#fff",
            },
          });
        }
      } else {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return loader ? (
    <Loader />
  ) : (
    <div className="container">
      <h1 className="my-4">{programInfo?.title}</h1>

      <div className="row">
        <div className="col-md-8">
          <img
            className="img-fluid rounded"
            src={programInfo?.images[currentIndex]}
            alt="image1"
          />
        </div>

        <div className="col-md-4">
          <h3 className="">Program Description</h3>
          <p>{programInfo?.Description}</p>
          <h3 className="my-3">Programs Components</h3>
          <ol>
            {programInfo?.Components?.map((c, i) => {
              if (i !== 3) {
                const index = i > 2 ? i - 1 : i;
                return (
                  <li
                    className="my-1"
                    key={i}
                    onMouseEnter={() => setCurrentIndex(index)}
                  >
                    {c}
                  </li>
                );
              }

              if (i === 3) {
                return c.Items.map((item, j) => (
                  <div classNames="mx-5" key={j}>
                    {j + 1}. {item}
                  </div>
                ));
              }
            })}
          </ol>
        </div>
      </div>

      <h3 className="my-4">Project Images</h3>

      <div className="row">
        <div
          className="col-md-3 col-sm-6 mb-4"
          onMouseEnter={() => setCurrentIndex(1)}
        >
          <img
            className="img-fluid rounded"
            src={programInfo?.images[1]}
            alt="image2"
          />
        </div>

        <div
          className="col-md-3 col-sm-6 mb-4"
          onMouseEnter={() => setCurrentIndex(2)}
        >
          <img
            className="img-fluid rounded"
            src={programInfo?.images[2]}
            alt="image3"
          />
        </div>

        <div
          className="col-md-3 col-sm-6 mb-4 "
          onMouseEnter={() => setCurrentIndex(3)}
        >
          <img
            className="img-fluid rounded"
            src={programInfo?.images[3]}
            alt="image4"
          />
        </div>

        <div
          className="col-md-3 col-sm-6 mb-4"
          onMouseEnter={() => setCurrentIndex(4)}
        >
          <img
            className="img-fluid rounded"
            src={programInfo?.images[4]}
            alt="image5"
          />
        </div>
      </div>
      <div
        className="row my-1"
        style={{
          backgroundColor: "rgb(246,252,252)",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="priceSet">
            <h3>Program Plane</h3>
            <p className="my-1">
              Price: ₹ <span className="price">{programPrice?.price}</span>
            </p>
            <p className="my-1 text-danger">
              Discount :{programPrice?.discount}% OFF
            </p>
            <p className="text-success">
              Price: ₹{" "}
              {calculateNewPrice(programPrice?.price, programPrice?.discount)}
            </p>
          </div>
          <div className="priceBtn">
            <div className="btn btn-primary" onClick={handleBuyProgram}>
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramView;
