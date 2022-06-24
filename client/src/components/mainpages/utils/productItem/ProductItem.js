import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    return (
        <div className="product__cart">
            <img src={product.images.secure_url} alt="anh ne" />

            <div className="product__box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            <div className="row__btn">
                <Link id="btn__buy" to="#!">
                    Buy
                </Link>
                <Link id="btn__view" to={`detail/${product._id}`}>
                    View
                </Link>
            </div>
        </div>
    );
};

export default ProductItem;
