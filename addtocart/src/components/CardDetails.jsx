import React from "react";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails" style={{ padding: "25px" }}>
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt="notext"
              />
            </div>
            <div className="details">
              <div className="section1">
                <strong>Restaurant : </strong>
                Masala Theory
              </div>
              <div
                className="section2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <strong>Price : </strong>Rs 350
                </span>
                <span>
                  <strong>Rating: </strong>
                  <span
                    style={{
                      background: "green",
                      color: "#fff",
                      padding: "2px 5px",
                      borderRadius: "5px",
                    }}
                  >
                    3★
                  </span>
                </span>
              </div>
              <div
                className="section2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <strong>Dishes : </strong>North Indian, Biryani, Mughlai
                </span>
                <span>
                  <strong>Order Review: </strong>1175+ orders placed from this
                  location
                </span>
              </div>
              <div
                className="section2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <strong>Total : </strong>Rs 350
                </span>
                <span>
                  <strong>Remove : </strong>
                  <i
                    className="fas fa-trash"
                    style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
