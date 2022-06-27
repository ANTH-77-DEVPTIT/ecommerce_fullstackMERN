import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

const Cart = () => {
    const state = useContext(GlobalState);
    const [cart] = state.userApi.cart;

    if (cart.length === 0)
        return (
            <h2
                style={{
                    fontSize: "5rem",
                    color: "darkblue",
                    textAlign: "center",
                }}
            >
                Cart Empty
            </h2>
        );

    const increment = () => {

    }

    const decrement = () => {

    }

    const removeProduct = () => {

    }

    return (
        <div>
          {

            cart.map(product => (
              <div className="detail cart" key={product._id}>
                        <img src={product.images.secure_url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
              }

            <div className="total">
                <h3>Total: $ 0</h3>
                {/* <PaypalButton
                total={total}
                tranSuccess={tranSuccess} /> */}
            </div>
        </div>
    );
};

export default Cart;
