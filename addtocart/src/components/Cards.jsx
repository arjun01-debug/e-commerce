import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const addItemHere = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Add to cart Projects</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => {
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "10rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : Rs {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={() => addItemHere(element)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
