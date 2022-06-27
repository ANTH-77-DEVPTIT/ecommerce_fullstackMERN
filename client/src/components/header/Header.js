import React from "react";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

import Menu from "./icons/menu.svg";
import Close from "./icons/close.svg";
import Cart from "./icons/cart.svg";
import axios from "axios";

const Header = () => {
    const state = useContext(GlobalState);
    const [isLogged] = state.userApi.isLogged;
    const [isAdmin] = state.userApi.isAdmin;
    const [cart] = state.userApi.cart

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const adminRouter = () => {
        return (
            <>
                <li>
                    <Link to="/create_product">Create Product</Link>
                </li>
                <li>
                    <Link to="/category">Categories</Link>
                </li>
            </>
        );
    };

    const loggedRouter = () => {
        return (
            <>
                <li>
                    <Link to="/history">History</Link>
                </li>
                <li>
                    <Link to="/" onClick={logoutUser}>Logout</Link>
                </li>
            </>
        );
    };

    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="Menu" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? "Admin" : "AnShop"}</Link>
                </h1>
            </div>

            <ul>
                <li>
                    <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
                    {isAdmin && adminRouter()}
                    {isLogged ? (
                        loggedRouter()
                    ) : (
                        <li>
                            <Link to="/login">Login - Register</Link>
                        </li>
                    )}
                </li>

                <li>
                    <img
                        src={Close}
                        alt="Close menu"
                        className="menu"
                        width="30"
                    />
                </li>
            </ul>

            {isAdmin ? (
                ""
            ) : (
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="Products cart" width="30" />
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
