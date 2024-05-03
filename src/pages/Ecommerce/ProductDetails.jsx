import React, { useRef, useState, useEffect } from "react";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import DetailsThumb from "../../components/Ecommerce/DetailsThumb";
import CustomersReview from "../../components/Ecommerce/CustomersReview";

const ProductDetails = () => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Nike Shoes",
      src: [
        "https://i.imgur.com/O0GMYuw.jpg",
        "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714608000&semt=sph",
        "https://i.imgur.com/O0GMYuw.jpg",
        "https://i.imgur.com/O0GMYuw.jpg",
      ],
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
  ]);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    myRef.current.children[index].className = "active";
  }, [index]);
  return (
    <EcommerceLayout>
      <div className="product">
        <div
          className="container m-0 p-0 g-0 m-auto"
          style={{ backgroundColor: "white" }}
        >
          {products.map((item) => (
            <div className="details1" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>
              <div className="box1">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span className="cutLinePrice">${item.price}</span>
                  <div className="d-flex">
                    <span>Discount : </span>
                    <span>30%</span>
                  </div>
                  <div className="flex">
                    <span>New Price : </span>
                    <span>$400</span>
                  </div>
                  <h4 className="mt-1">Instructions</h4>
                  <div className="row my-0 py-0 ">
                    <div className="instructionList">
                      {[1, 2, 3].map((ins, i) => (
                        <p>{i + 1} Take medicine daily</p>
                      ))}
                    </div>
                  </div>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />

                <button className="cart btn bg-primary">Add to cart</button>
              </div>
            </div>
          ))}
          <hr />
          <CustomersReview />
        </div>
      </div>
    </EcommerceLayout>
  );
};

export default ProductDetails;
