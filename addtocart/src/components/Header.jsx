import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/esm/Table';
import { addCurrentElement } from "../redux/actions";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigate = (element) => {
    dispatch(addCurrentElement(element));
    navigate(`cart/${element.id}`)
  } 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          Add to Cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={cartItems.cart.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            class="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >

          {
            cartItems.cart.length ?
              <div className="card_details" style={{width: '24rem', padding:10}}>
                <Table>
                  <thead>
                    <tr>
                      <th>
                        Photo
                      </th>
                      <th>
                        Restaurant Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.cart.map((element, index) => {
                        return(
                          <tr>
                            <td>
                              {index + 1}: 
                              <img onClick={() => handleNavigate(element)} src={element.imgdata} alt={element.rname} style={{width : '5rem', height:'5rem'}}/>
                            </td>
                            <td>
                              <p>{element.rname}</p>
                              <p>Price: Rs {element.price}</p>
                              <p>Quantity: {element.qnty}</p>
                              <p style={{color: 'red', fontSize:20, cursor:'pointer'}}>
                                <i className="fas fa-trash smalltrash"/>
                              </p>
                            </td>
                            <td className="mt-5" style={{color: 'red', fontSize: 20, cursor: 'pointer'}}>
                              <i className="fas fa-trash largetrash"/>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </div>
              :
              <div className="card_details">
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
          }
        </Menu>
      </Container>
    </Navbar>
  );
};

export default Header;
