import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ai from "react-icons/ai";
import { Form, Button, Dropdown } from "react-bootstrap";
import "./style/Header.css";
import CartList from "../Products/CartList";
import { useCart } from "react-use-cart";
import { auth } from "../../database/auth-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
function MainNav(props) {
  const [cartList, setCartList] = useState(false);
  const [user, setUser] = useState({});
  const { totalItems } = useCart();
  const showCartList = () => {
    setCartList(!cartList);
  };
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  const signout = async () => {
    await signOut(auth);
  };
  const userLogged = () => {
    if (user) {
      return (
        <>
          <Dropdown.Toggle id="dropdown-basic">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            {user.email}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={signout}>sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </>
      );
    } else {
      return (
        <>
          <Dropdown.Toggle id="dropdown-basic">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            My Account
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={"/login"} className="accountLog">
              login
            </Link>
            <Link to={"/Register"} className="accountLog">
              Register
            </Link>
          </Dropdown.Menu>
        </>
      );
    }
  };
  return (
    <div className="MainBar">
      <div className="container-fluid fNav">
        <div className="d-flex justify-content-around">
          <section id="dropnav">
            <Dropdown>{userLogged()}</Dropdown>
          </section>
          <section className="MLogo">
            <h4>
              <a href="/home">MOON</a>
            </h4>
          </section>
          <section className="d-flex justify-content-between">
            <Form className="d-flex" id="searchForm">
              <Button id="searchButton" type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </Button>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="search"
                  placeholder="Search here"
                  id="searchTerm"
                />
              </Form.Group>
            </Form>
            <div className="Icons d-flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div className="cart-icon">
                <svg
                  onClick={showCartList}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <div className="numOfClass">
                  <p>{totalItems}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={cartList ? "listItems cartactive" : "listItems"}>
        <ai.AiOutlineClose className="close-icon" onClick={showCartList} />
        <h3>
          Cart List <span> {totalItems}</span>
        </h3>
        <CartList />
      </div>
    </div>
  );
}
export default MainNav;
