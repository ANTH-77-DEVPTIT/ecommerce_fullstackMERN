import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";

const BtnRender = ({ product }) => {
    const state = useContext(GlobalState);
    const [isAdmin] = state.userApi.isAdmin;
    const addCart = state.userApi.addCart;
    return (
        <div className="row__btn">
            {isAdmin ? (
                <>
                    <Link id="btn__buy" to="#!">
                        Delete
                    </Link>
                    <Link id="btn__view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        id="btn__buy"
                        to="#!"
                        onClick={() => addCart(product)}
                    >
                        Buy
                    </Link>
                    <Link id="btn__view" to={`/detail/${product._id}`}>
                        View
                    </Link>
                </>
            )}
        </div>
    );
};

export default BtnRender;
