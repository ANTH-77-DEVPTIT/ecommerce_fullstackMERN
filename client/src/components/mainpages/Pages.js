import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products/Products";
import Login from "./auth/Login"
import Register from "./auth/Register"
import Cart from "./cart/Cart"
import NotFoundPage from "./utils/notFound/NotFound"

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Pages;
