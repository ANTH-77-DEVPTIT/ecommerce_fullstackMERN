import React from "react";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

import "./header.css";

import Menu from "./icons/menu.svg";
import Close from "./icons/close.svg";
import Cart from "./icons/cart.svg";

const Header = () => {
    const value = useContext(GlobalState);
    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="Menu" width="30" />
            </div>
            
            <div className="logo">
                <h1>
                    <Link to="/">AnShop</Link>
                </h1>
            </div>

            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/login">Login - Register</Link>
                </li>
                <li>
                    <img src={Close} alt="Close menu" className="menu" width="30" />
                </li>
            </ul>

            <div className="cart-icon">
              <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="Products cart" width="30" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
