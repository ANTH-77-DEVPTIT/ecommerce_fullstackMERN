import React from "react";
import { Link } from "react-router-dom";

const BtnRender = ({ product }) => {
    return (
        <div className="row__btn">
            <Link id="btn__buy" to="#!">
                Buy
            </Link>
            <Link id="btn__view" to={`/detail/${product._id}`}>
                View
            </Link>
        </div>
    );
};

export default BtnRender;
