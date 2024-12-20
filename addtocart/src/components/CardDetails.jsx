import React from "react";
import { useSelector } from "react-redux";

const CardDetails = () => {

  const selectedElement = useSelector((state) => state.cartReducer.currentElement);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails" style={{ padding: "25px" }}>
            <div className="items_img">
              <img
                src={selectedElement.imgdata}
                alt="notext"
              />
            </div>
            <div className="details">
              <div className="section1">
                <strong>Restaurant : </strong>
                {selectedElement.rname}
              </div>
              <div
                className="section2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <strong>Price : </strong>Rs {selectedElement.price}
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
                    {selectedElement.rating}★
                  </span>
                </span>
              </div>
              <div
                className="section2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <strong>Dishes : </strong>{selectedElement.address}
                </span>
                <span>
                  <strong>Order Review: </strong>{selectedElement.somedata}
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
                <div
                  className="mt-5 d-flex justify-content-between align-items-center"
                  style={{
                    width: 100,
                    cursor: "pointer",
                    background: "#ddd",
                    color: "#111",
                  }}
                >
                  <span style={{ fontSize: 24 }}>-</span>
                  <span style={{ fontSize: 22 }}>1</span>
                  <span style={{ fontSize: 24 }}>+</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
