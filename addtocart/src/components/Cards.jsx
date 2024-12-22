import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { addCurrentElement, addItem } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [data] = useState(Cardsdata);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addItemHere = (item) => {
    dispatch(addItem(item));
  };

  const addDetails = (element) => {
    dispatch(addCurrentElement(element));
    navigate(`cart/${element.id}`)
  }

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
                  onClick={() => addDetails(element)}
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
