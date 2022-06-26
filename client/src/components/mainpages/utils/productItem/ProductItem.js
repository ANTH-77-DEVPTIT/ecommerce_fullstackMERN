import React from "react";
import BtnRender from "./BtnRender";

const ProductItem = ({ product }) => {
    return (
        <div className="product__cart">
            <img src={product.images.secure_url} alt="anh ne" />

            <div className="product__box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            <BtnRender product={product} />
        </div>
    );
};

export default ProductItem;
